
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'

import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'
import { Link } from '../router'

const contactOptions = [
  {
    icon: ShieldCheck,
    title: 'Safety & compliance',
    description:
      'Discuss aviation safety systems, compliance requirements and operational readiness.',
  },
  {
    icon: MessageCircle,
    title: 'Training & development',
    description:
      'Explore pilot training, cabin crew development and aviation workforce capability.',
  },
  {
    icon: Clock,
    title: 'Operational support',
    description:
      'Tell us about your organisation, project timeline and operational priorities.',
  },
]

export default function Contact() {
  return (
    <div className="page contact-page">
      <section className="page-hero contact-hero">
        <div className="container">
          <span className="eyebrow">Contact / 06</span>

          <h1>
            Let’s discuss your
            <br />
            <em>aviation goals.</em>
          </h1>

          <p>
            Every aviation organisation has different challenges.
            Tell us what you are working toward, and let’s explore
            how SASI Aviation can support your next step.
          </p>

          <a className="button button-primary" href="#contact-form">
            Start a conversation
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="section contact-main-section">
        <div className="container contact-grid">
          <div className="contact-information">
            <SectionHeader
              eyebrow="Start a conversation"
              title="A direct line to SASI."
            />

            <p className="contact-intro">
              Whether you are planning a training programme, strengthening
              safety and compliance, or developing aviation operations,
              we welcome the opportunity to understand your requirements.
            </p>

            <div className="contact-details">
              <a href="mailto:mikyasair@gmail.com">
                <span className="contact-detail-icon">
                  <Mail size={19} />
                </span>
                <span>
                  <small>Email us</small>
                  <strong>mikyasair@gmail.com</strong>
                </span>
                <ArrowRight className="contact-detail-arrow" size={17} />
              </a>

              <div className="contact-detail-static">
                <span className="contact-detail-icon">
                  <MapPin size={19} />
                </span>
                <span>
                  <small>Our focus</small>
                  <strong>Africa-focused · International standards</strong>
                </span>
              </div>
            </div>

            <div className="contact-response-note">
              <span className="contact-response-icon">
                <MessageCircle size={19} />
              </span>
              <div>
                <h3>Let’s understand your needs</h3>
                <p>
                  Share your goals and the kind of support you need.
                  Providing clear details will help us understand your
                  enquiry and respond appropriately.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-panel" id="contact-form">
            <div className="contact-form-heading">
              <span className="eyebrow">Send an enquiry</span>
              <h2>How can we help?</h2>
              <p>
                Complete the form below and tell us a little about your
                organisation or project.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section contact-services-section">
        <div className="container">
          <SectionHeader
            eyebrow="How we can help"
            title="What would you like to discuss?"
            description="Choose a starting point for your enquiry. We can discuss your specific requirements from there."
          />

          <div className="contact-options-grid">
            {contactOptions.map((option) => {
              const Icon = option.icon

              return (
                <article className="contact-option-card" key={option.title}>
                  <span className="contact-option-icon">
                    <Icon size={22} />
                  </span>

                  <h3>{option.title}</h3>
                  <p>{option.description}</p>

                  <Link className="text-link" to="/services">
                    Explore services
                    <ArrowRight size={15} />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section contact-bottom-section">
        <div className="container contact-bottom-inner">
          <div>
            <span className="eyebrow">SASI Aviation</span>
            <h2>
              Building stronger
              <br />
              <em>aviation capability.</em>
            </h2>
            <p>
              Let’s work toward safer operations, stronger training
              and sustainable aviation development.
            </p>
          </div>

          <a className="button button-primary" href="mailto:mikyasair@gmail.com">
            Email SASI
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </div>
  )
}
