from datetime import datetime, timezone
from email.message import EmailMessage
import os
import smtplib

import psycopg
from dotenv import load_dotenv
from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL is not configured in .env")


app = FastAPI(
    title="SASI Aviation Advisory API",
    version="1.0.0",
)


# ---------------------------------------------------------
# CORS
# ---------------------------------------------------------

origins = [
    item.strip()
    for item in os.getenv(
        "CORS_ORIGINS",
        "http://localhost:5173"
    ).split(",")
    if item.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------
# Models
# ---------------------------------------------------------

class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    organization: str = Field(default="", max_length=160)
    email: EmailStr
    phone: str = Field(default="", max_length=60)
    service: str = Field(min_length=2, max_length=120)
    message: str = Field(min_length=10, max_length=5000)
    website: str = Field(default="", max_length=200)


class ContactResponse(BaseModel):
    message: str
    inquiry_id: int


# ---------------------------------------------------------
# Database
# ---------------------------------------------------------

def get_connection():
    return psycopg.connect(DATABASE_URL)


def init_db() -> None:
    with get_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS inquiries (
                id BIGSERIAL PRIMARY KEY,
                name VARCHAR(120) NOT NULL,
                organization VARCHAR(160),
                email VARCHAR(320) NOT NULL,
                phone VARCHAR(60),
                service VARCHAR(120) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMPTZ NOT NULL
            )
            """
        )

        conn.commit()


# ---------------------------------------------------------
# Email
# ---------------------------------------------------------

def send_email(data: ContactRequest) -> None:

    host = os.getenv("SMTP_HOST")
    port = int(os.getenv("SMTP_PORT", "587"))
    username = os.getenv("SMTP_USERNAME")
    password = os.getenv("SMTP_PASSWORD")

    recipient = os.getenv(
        "CONTACT_RECIPIENT",
        "mikyasair@gmail.com"
    )

    sender = os.getenv(
        "SMTP_FROM",
        username or "website@sasi.local"
    )

    # SMTP is optional during development
    if not host or not username or not password:
        return

    msg = EmailMessage()

    msg["Subject"] = (
        f"SASI website enquiry — {data.service}"
    )

    msg["From"] = sender
    msg["To"] = recipient
    msg["Reply-To"] = data.email

    msg.set_content(
        f"""
New SASI website enquiry

Name: {data.name}
Organization: {data.organization}
Email: {data.email}
Phone: {data.phone}
Service: {data.service}

Message:
{data.message}
"""
    )

    with smtplib.SMTP(host, port, timeout=15) as smtp:
        smtp.starttls()
        smtp.login(username, password)
        smtp.send_message(msg)


# ---------------------------------------------------------
# Startup
# ---------------------------------------------------------

@app.on_event("startup")
def startup():
    init_db()


# ---------------------------------------------------------
# Health
# ---------------------------------------------------------

@app.get("/api/health")
def health():

    return {
        "status": "ok",
        "service": "sasi-api",
        "database": "postgresql",
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }


# ---------------------------------------------------------
# Contact form
# ---------------------------------------------------------

@app.post(
    "/api/contact",
    response_model=ContactResponse
)
def contact(payload: ContactRequest):

    # Honeypot
    if payload.website.strip():

        return {
            "message": "Thank you. Your enquiry has been received.",
            "inquiry_id": 0,
        }

    created_at = datetime.now(timezone.utc)

    with get_connection() as conn:

        cursor = conn.execute(
            """
            INSERT INTO inquiries (
                name,
                organization,
                email,
                phone,
                service,
                message,
                created_at
            )
            VALUES (
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s
            )
            RETURNING id
            """,
            (
                payload.name.strip(),
                payload.organization.strip(),
                str(payload.email),
                payload.phone.strip(),
                payload.service.strip(),
                payload.message.strip(),
                created_at,
            ),
        )

        inquiry_id = cursor.fetchone()[0]

        conn.commit()

    # Email notification
    try:

        send_email(payload)

    except Exception as exc:

        print(
            f"Email notification failed: {exc}"
        )

    return {
        "message": "Thank you. Your enquiry has been received.",
        "inquiry_id": inquiry_id,
    }


# ---------------------------------------------------------
# Admin inquiries
# ---------------------------------------------------------

@app.get("/api/inquiries")
def inquiries(
    x_admin_token: str | None = Header(default=None)
):

    token = os.getenv("ADMIN_TOKEN")

    if not token or x_admin_token != token:

        raise HTTPException(
            status_code=401,
            detail="Unauthorized",
        )

    with get_connection() as conn:

        rows = conn.execute(
            """
            SELECT
                id,
                name,
                organization,
                email,
                phone,
                service,
                message,
                created_at
            FROM inquiries
            ORDER BY id DESC
            """
        ).fetchall()

    return [
        {
            "id": row[0],
            "name": row[1],
            "organization": row[2],
            "email": row[3],
            "phone": row[4],
            "service": row[5],
            "message": row[6],
            "created_at": row[7],
        }
        for row in rows
    ]