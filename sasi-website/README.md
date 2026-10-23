# SASI — Safer African Skies Initiative

A clean React + Vite frontend with a FastAPI backend for the SASI aviation advisory website.

## Structure

```text
sasi-website/
├── frontend/   # React + Vite + TypeScript
├── backend/    # FastAPI + SQLite
└── README.md
```

## 1. Frontend

Requirements: Node.js 20+.

```bash
cd frontend
npm install
copy .env.example .env   # Windows
npm run dev
```

Frontend: http://localhost:5173

## 2. Backend

Requirements: Python 3.11+.

```bash
cd backend
python -m venv .venv
.venv\\Scripts\\activate       # Windows
pip install -r requirements.txt
copy .env.example .env
uvicorn main:app --reload --port 8000
```

Backend: http://localhost:8000
API docs: http://localhost:8000/docs

## Contact workflow

`POST /api/contact` validates the enquiry, stores it in `backend/sasi.db`, and optionally sends an email through SMTP when the SMTP variables are configured.

`GET /api/inquiries` requires the `X-Admin-Token` header and returns stored enquiries. Set a strong `ADMIN_TOKEN` before production.

## Hero media

The two supplied aircraft GIF files are used in the hero as alternating cinematic slides with a crossfade and subtle scale transition:

- `frontend/src/assets/hero-landing.gif`
- `frontend/src/assets/hero-airbus.gif`

The supplied files are single-frame GIFs, so the website treats them as premium aviation stills and animates the transition between them.

## Logo

The current wordmark is a placeholder component. Replace `frontend/src/components/Logo.tsx` with the official SASI logo when ready.

## Quick start on Windows

From PowerShell:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\setup.ps1
.\start-dev.ps1
```

The frontend TypeScript check passes in the supplied source. The local environment used to inspect the project did not contain the native Rolldown optional binding required by the cached Vite build, so run a normal `npm install` locally before building.
