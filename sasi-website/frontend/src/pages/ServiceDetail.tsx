
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link, usePath } from '../router'

const serviceDetails: Record<
  string,
  {
    title: string
    subtitle: string
    overview: string
    areas: string[]
    outcome: string
  }
> = {
  'pilot-training': {
    title: 'Pilot Training',
    subtitle: 'Building skilled, confident, safety-focused aviation professionals.',
    overview:
      'We support pilot training programs through structured planning, competency development, training standards, and operational readiness guidance.',
    areas: [
      'Pilot training program development',
      'Competency-based training guidance',
      'Training standards and performance assessment',
      'Operational readiness and continuous improvement',
    ],
    outcome:
      'A more structured training environment focused on professional competence, safety, and operational readiness.',
  },
  'airline-startup-support': {
    title: 'Airline Start Up Support',
    subtitle: 'Turning aviation business plans into operationally prepared airlines.',
    overview:
      'We provide advisory support for organizations planning to establish an airline, helping them approach business planning, operational preparation, certification requirements, and launch readiness in a structured way.',
    areas: [
      'Airline business and operational planning',
      'Certification and regulatory process guidance',
      'Operational structure and procedure development',
      'Launch readiness planning',
    ],
    outcome:
      'A clearer roadmap for establishing an airline and preparing its operations responsibly.',
  },
  'safety-compliance': {
    title: 'Safety & Compliance',
    subtitle: 'Making safety and regulatory responsibility part of everyday operations.',
    overview:
      'We help aviation organizations strengthen safety practices, improve compliance processes, and build systems that support consistent operational performance.',
    areas: [
      'Safety management system guidance',
      'Risk identification and assessment',
      'Regulatory compliance support',
      'Safety documentation and process improvement',
    ],
    outcome:
      'Stronger safety processes, improved compliance awareness, and a more consistent approach to managing operational risk.',
  },
  'cabin-training': {
    title: 'Cabin Training',
    subtitle: 'Preparing cabin crew for safe, professional passenger operations.',
    overview:
      'Our cabin training services focus on safety responsibilities, passenger care, communication, emergency preparedness, and professional service delivery.',
    areas: [
      'Cabin crew safety and responsibilities',
      'Emergency procedure training support',
      'Passenger communication and service',
      'Professional conduct and teamwork',
    ],
    outcome:
      'Cabin crew better prepared to support passenger safety and deliver professional service.',
  },
  'maintenance-training': {
    title: 'Maintenance Training',
    subtitle: 'Supporting technical knowledge, maintenance capability, and reliability.',
    overview:
      'We support aviation technical training initiatives designed to strengthen maintenance knowledge, procedural discipline, and awareness of aircraft reliability and safety.',
    areas: [
      'Technical training program support',
      'Maintenance procedures and documentation',
      'Quality and safety awareness',
      'Technical competency development',
    ],
    outcome:
      'A stronger foundation for technical capability, maintenance discipline, and safe aviation practices.',
  },
  'aviation-operations': {
    title: 'Aviation Operations',
    subtitle: 'Improving the systems and processes behind effective aviation services.',
    overview:
      'We provide operational advisory services to help aviation organizations review workflows, identify improvement opportunities, and strengthen coordination and performance.',
    areas: [
      'Operational planning and coordination',
      'Workflow and process improvement',
      'Performance monitoring',
      'Operational efficiency and continuous improvement',
    ],
    outcome:
      'Clearer operational processes and a practical path toward improved efficiency and performance.',
  },
}

export default function ServiceDetail() {
  const path = usePath()
  const segments = path.split('/').filter(Boolean)
  const slug = segments[segments.length - 1] ?? ''
  const service = serviceDetails[slug]

  if (!service) {
    return (
      <main className="page">
        <section className="service-detail-hero">
          <div className="container">
            <span className="eyebrow">SASI Aviation / Services</span>
            <h1>Service not found.</h1>
            <p>
              The service page may have moved or the requested service does
              not exist.
            </p>
            <Link className="service-back-link" to="/services">
              <ArrowLeft size={18} />
              Back to all services
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <section className="service-detail-hero">
        <div className="container">
          <Link className="service-back-link" to="/services">
            <ArrowLeft size={18} />
            All services
          </Link>

          <span className="eyebrow">SASI Aviation / Our Services</span>
          <h1>
            {service.title.split(' ').slice(0, -1).join(' ')}{' '}
            <em>{service.title.split(' ').slice(-1).join('')}</em>
          </h1>
          <p>{service.subtitle}</p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-layout">
          <div className="service-detail-copy">
            <span className="eyebrow">Overview</span>
            <h2>Practical expertise. Purposeful results.</h2>
            <p>{service.overview}</p>

            <h2>How we can help</h2>
            <ul className="service-detail-list">
              {service.areas.map((area) => (
                <li key={area}>
                  <CheckCircle2 size={19} />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="service-detail-aside">
            <span className="eyebrow">The objective</span>
            <h3>Designed around your needs.</h3>
            <p>{service.outcome}</p>
            <Link className="service-detail-cta-link" to="/contact">
              Discuss your requirements
              <ArrowRight size={18} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container">
          <span className="eyebrow">Work with SASI Aviation</span>
          <h2>Let's discuss your aviation goals.</h2>
          <p>
            Contact our team to discuss your needs and explore the right
            support for your organization.
          </p>
          <Link className="button button-primary" to="/contact">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
