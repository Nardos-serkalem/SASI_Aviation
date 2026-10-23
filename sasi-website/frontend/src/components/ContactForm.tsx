import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, LoaderCircle } from 'lucide-react'

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '')

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [message, setMessage] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const response = await fetch(`${API_URL}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.detail || 'Unable to submit your enquiry.')
      setStatus('success')
      setMessage(result.message || 'Thank you. Your enquiry has been received.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please email mikyasair@gmail.com directly.')
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Organization<input name="organization" placeholder="Airline or organization" /></label></div>
      <div className="form-row"><label>Email<input required type="email" name="email" placeholder="you@organization.com" /></label><label>Phone<input name="phone" placeholder="Optional" /></label></div>
      <label>Area of interest<select required name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Pilot Training Advisory</option><option>Airline Start-up Support</option><option>Safety & Compliance</option><option>Cabin Training</option><option>Maintenance Training</option><option>Operational Excellence</option><option>Other</option></select></label>
      <label>Message<textarea required name="message" rows={6} placeholder="Tell us briefly about your aviation goal or requirement." /></label>
      <div className="form-actions"><button className="button button--navy" disabled={status === 'loading'}>{status === 'loading' ? <><LoaderCircle className="spin" size={17}/> Sending</> : 'Send enquiry'}</button>{status === 'success' && <span className="form-success"><CheckCircle2 size={17}/>{message}</span>}{status === 'error' && <span className="form-error">{message}</span>}</div>
    </form>
  )
}
