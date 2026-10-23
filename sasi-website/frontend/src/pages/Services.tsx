
import { ArrowRight, ShieldCheck, Users, Target, Compass } from 'lucide-react'
import { Link } from '../router'
import ServiceGrid from '../components/ServiceGrid'
import SectionHeader from '../components/SectionHeader'

import pilotTraining from '../assets/pilot.jpg'
import airlineStartup from '../assets/pilot.jpg'
import safetyCompliance from '../assets/pilot.jpg'
import cabinTraining from '../assets/training.jpg'
import maintenanceTraining from '../assets/pilot.jpg'
import aviationOperations from '../assets/pilot.jpg'

const services = [
  {
    slug: 'pilot-training',
    title: 'Pilot Training',
    description:
      'Support for structured pilot training programs, competency development, professional standards, and operational readiness.',
    image: pilotTraining,
  },
  {
    slug: 'airline-startup-support',
    title: 'Airline Start Up Support',
    description:
      'Guidance for organizations preparing to establish an airline, from operational planning to certification readiness.',
    image: airlineStartup,
  },
  {
    slug: 'safety-compliance',
    title: 'Safety & Compliance',
    description:
      'Practical support for safety management, risk awareness, regulatory processes, and consistent operational standards.',
    image: safetyCompliance,
  },
  {
    slug: 'cabin-training',
    title: 'Cabin Training',
    description:
      'Training support focused on cabin safety, emergency preparedness, passenger care, communication, and professionalism.',
    image: cabinTraining,
  },
  {
    slug: 'maintenance-training',
    title: 'Maintenance Training',
    description:
      'Technical learning and advisory support to strengthen maintenance knowledge, procedures, and safety awareness.',
    image: maintenanceTraining,
  },
  {
    slug: 'aviation-operations',
    title: 'Aviation Operations',
    description:
      'Operational guidance to improve workflows, coordination, organizational efficiency, and service performance.',
    image: aviationOperations,
  },
]

const approach = [
  {
    icon: Target,
    title: 'Understand the need',
    description:
      'We begin by understanding the organization, its objectives, its operational environment, and the challenges it wants to address.',
  },
  {
    icon: Compass,
    title: 'Develop a practical direction',
    description:
      'We help identify priorities and organize suitable training, advisory, or operational support around the requirements.',
  },
  {
    icon: Users,
    title: 'Work collaboratively',
    description:
      'We value clear communication, professional collaboration, and solutions that fit the people and systems using them.',
  },
  {
    icon: ShieldCheck,
    title: 'Focus on improvement',
    description:
      'Safety, professional standards, and continuous improvement remain central considerations throughout the process.',
  },
]

export default function Services() {
  return (
    <main className="page services-page">
      {/* Hero */}
      <section className="page-hero services-hero">
        <div className="container">
          <span className="eyebrow">SASI Aviation / Our Services</span>
          <h1>
            Supporting the future
            <br />
            of <em>aviation in Africa.</em>
          </h1>
          <p className="services-hero-description">
            From professional training and safety support to airline
            development and operational guidance, SASI Aviation is focused on
            helping aviation organizations build capability, strengthen
            performance, and pursue sustainable growth.
          </p>

          <div className="services-hero-actions">
            <a className="button button-primary" href="#service-list">
              Explore our services <ArrowRight size={18} />
            </a>
            <Link className="button button-secondary" to="/contact">
              Talk to our team
            </Link>
          </div>

          <div className="services-hero-note">
            <span className="services-hero-line" />
            <p>
              Safety-led thinking. Practical solutions. Professional
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="services-introduction">
        <div className="container services-introduction-grid">
          <div>
            <span className="eyebrow">What we stand for</span>
            <h2>
              Aviation expertise
              <br />
              with <em>purpose.</em>
            </h2>
          </div>

          <div className="services-introduction-copy">
            <p>
              Aviation requires more than technical knowledge. It depends on
              capable people, reliable processes, strong safety practices,
              and effective coordination across every part of an operation.
            </p>
            <p>
              SASI Aviation brings these priorities into focus through a
              service offering designed around training, operational
              preparedness, safety awareness, and organizational development.
              Our aim is to help clients better understand their requirements
              and identify practical ways to strengthen their capabilities.
            </p>
            <p>
              Whether an organization is developing its workforce, preparing
              for new operations, or reviewing existing processes, our approach
              emphasizes professional standards, clear planning, and
              continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="services-section" id="service-list">
        <div className="container">
          <SectionHeader
            eyebrow="Our expertise"
            title="Services designed to move aviation forward."
          />
          <p className="services-section-intro">
            Explore our core service areas. Each service page explains the
            focus, key areas of support, and how to discuss your requirements
            with our team.
          </p>
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* Detailed service descriptions */}
      <section className="services-detail-overview">
        <div className="container">
          <div className="services-detail-heading">
            <span className="eyebrow">How we support aviation</span>
            <h2>
              The right support for
              <br />
              <em>every stage.</em>
            </h2>
            <p>
              Our service areas address different needs across the aviation
              environment. Together, they provide a foundation for building
              professional capability, improving preparedness, and supporting
              responsible operational development.
            </p>
          </div>

          <div className="services-long-list">
            <article className="services-long-item">
              <span className="services-long-number">01</span>
              <div>
                <h3>Pilot Training</h3>
                <p>
                  Effective pilot development depends on structured learning,
                  clear competency expectations, and a strong understanding of
                  operational responsibilities. Our pilot training support
                  focuses on training program planning, professional
                  development, training standards, and readiness. We help
                  organizations consider how their training activities align
                  with their objectives and the capabilities their pilots need
                  to develop.
                </p>
                <Link to="/services/pilot-training">
                  Explore pilot training <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            <article className="services-long-item">
              <span className="services-long-number">02</span>
              <div>
                <h3>Airline Start Up Support</h3>
                <p>
                  Establishing an airline requires coordinated planning across
                  business, operational, organizational, and regulatory
                  considerations. Our advisory focus helps prospective
                  operators organize their priorities, understand relevant
                  preparation stages, and identify the capabilities and
                  processes needed for launch readiness. Each project should
                  be considered according to its specific operating model and
                  applicable regulatory requirements.
                </p>
                <Link to="/services/airline-startup-support">
                  Explore airline start-up support <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            <article className="services-long-item">
              <span className="services-long-number">03</span>
              <div>
                <h3>Safety & Compliance</h3>
                <p>
                  Safety is fundamental to sustainable aviation operations.
                  Organizations need clear processes for identifying risks,
                  communicating responsibilities, documenting procedures, and
                  monitoring compliance. Our safety and compliance support
                  focuses on strengthening awareness, reviewing processes, and
                  encouraging a systematic approach to risk management and
                  continuous improvement. Specific regulatory obligations
                  depend on the organization and its jurisdiction.
                </p>
                <Link to="/services/safety-compliance">
                  Explore safety and compliance <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            <article className="services-long-item">
              <span className="services-long-number">04</span>
              <div>
                <h3>Cabin Training</h3>
                <p>
                  Cabin crew play an essential role in passenger safety,
                  emergency preparedness, communication, and the overall
                  passenger experience. Our cabin training support emphasizes
                  professional conduct, teamwork, safety responsibilities,
                  passenger care, and awareness of emergency procedures.
                  Training plans should be tailored to the role, operating
                  environment, and applicable aviation requirements.
                </p>
                <Link to="/services/cabin-training">
                  Explore cabin training <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            <article className="services-long-item">
              <span className="services-long-number">05</span>
              <div>
                <h3>Maintenance Training</h3>
                <p>
                  Reliable aircraft maintenance relies on technical knowledge,
                  careful documentation, procedural discipline, and a strong
                  safety culture. Our maintenance training support focuses on
                  technical learning, maintenance processes, quality awareness,
                  and professional capability development. Training scope and
                  delivery must be aligned with the relevant aircraft,
                  maintenance organization, and licensing requirements.
                </p>
                <Link to="/services/maintenance-training">
                  Explore maintenance training <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            <article className="services-long-item">
              <span className="services-long-number">06</span>
              <div>
                <h3>Aviation Operations</h3>
                <p>
                  Aviation operations depend on well-coordinated teams,
                  clearly defined responsibilities, efficient workflows, and
                  consistent performance monitoring. Our operational support
                  focuses on reviewing processes, identifying improvement
                  opportunities, and helping organizations approach planning
                  and coordination more effectively. The goal is to support
                  reliable operations while keeping safety and service quality
                  in view.
                </p>
                <Link to="/services/aviation-operations">
                  Explore aviation operations <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="services-approach">
        <div className="container">
          <div className="services-approach-heading">
            <span className="eyebrow">Our approach</span>
            <h2>
              Practical thinking.
              <br />
              <em>Professional standards.</em>
            </h2>
            <p>
              We believe that useful aviation support begins with understanding
              the challenge and ends with a clear direction for improvement.
            </p>
          </div>

          <div className="services-approach-grid">
            {approach.map((item, index) => {
              const Icon = item.icon

              return (
                <article className="services-approach-card" key={item.title}>
                  <span className="services-approach-index">
                    0{index + 1}
                  </span>
                  <Icon size={25} strokeWidth={1.6} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-final-cta">
        <div className="container services-final-cta-inner">
          <div>
            <span className="eyebrow">Start a conversation</span>
            <h2>
              Let's move aviation
              <br />
              <em>forward together.</em>
            </h2>
            <p>
              Tell us about your organization, your priorities, and the
              aviation support you are looking for. Our team can help you
              identify the next step.
            </p>
          </div>
          <Link className="button button-primary" to="/contact">
            Contact SASI Aviation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
