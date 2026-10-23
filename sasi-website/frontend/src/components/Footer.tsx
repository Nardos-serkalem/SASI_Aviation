
import { ArrowUpRight, Mail } from 'lucide-react'
import { Link } from '../router'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p className="footer-copy">
            Advancing aviation safety, professional training, and airline
            excellence across Africa through practical, operations-focused
            advisory services.
          </p>
        </div>

        <div className="footer-column">
          <span className="eyebrow footer-heading">Quick Links</span>
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/about">About SASI</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/approach">Our Approach</Link>
            <Link to="/founder">Our Founder</Link>
            <Link to="/insights">Insights</Link>
          </nav>
        </div>

        <div className="footer-column">
          <span className="eyebrow footer-heading">Contact Us</span>
          <p className="footer-contact-intro">
            Have a question or need aviation advisory support? We welcome
            your inquiry.
          </p>

          <a
            className="footer-contact-link"
            href="mailto:mikyasair@gmail.com"
          >
            <Mail size={16} aria-hidden="true" />
            <span>mikyasair@gmail.com</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <Link className="footer-contact-link" to="/contact">
            <ArrowUpRight size={16} aria-hidden="true" />
            <span>Contact SASI</span>
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} SASI — Safer African Skies Initiative.
        </span>
        <span>Professional aviation advisory · Africa</span>
      </div>
    </footer>
  )
}