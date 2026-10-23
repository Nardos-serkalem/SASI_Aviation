
import { ArrowDown, ArrowRight, ArrowUpRight, ShieldCheck, GraduationCap, Plane, Compass, Target, Eye, Users, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { Link } from '../router'
import training from '../assets/training.jpg'

const principles = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Safety first',
    description:
      'Safety should guide operational decisions, professional training, risk management, and organizational priorities. We emphasize practical safety thinking that can be applied consistently in everyday aviation activities.',
  },
  {
    number: '02',
    icon: GraduationCap,
    title: 'Professional capability',
    description:
      'Aviation depends on knowledgeable people and effective training. We focus on developing professional capability, strengthening competencies, and supporting learning that translates into better operational practice.',
  },
  {
    number: '03',
    icon: Compass,
    title: 'Operational discipline',
    description:
      'Reliable aviation operations depend on clear procedures, defined responsibilities, consistent standards, and a commitment to continuous improvement. Our approach connects formal requirements with operational realities.',
  },
  {
    number: '04',
    icon: Plane,
    title: 'African context',
    description:
      'Aviation organizations across Africa operate in diverse environments. We recognize the importance of understanding local needs while working toward internationally recognized standards and sustainable development.',
  },
]

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We begin by understanding the organization, its operational environment, objectives, existing capabilities, and the challenges it needs to address.',
  },
  {
    number: '02',
    title: 'Assess',
    description:
      'We examine priorities, current practices, capability needs, and opportunities to strengthen safety, training, compliance, and operational readiness.',
  },
  {
    number: '03',
    title: 'Strengthen',
    description:
      'We help identify practical improvements, establish clearer processes, and support the development of capabilities aligned with the organization’s goals.',
  },
  {
    number: '04',
    title: 'Sustain',
    description:
      'We emphasize consistency, professional development, and continuous improvement so that better practices can become part of everyday operations.',
  },
]

export default function About() {
  return (
    <div className="page about-page">
      <section className="page-hero about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <div className="about-hero-label">
              <span className="about-hero-line" />
              <span className="eyebrow">About SASI</span>
            </div>

            <h1>
              Safer skies.
              <br />
              <em>Stronger systems.</em>
            </h1>

            <p>
              The Safer African Skies Initiative is focused on strengthening
              aviation safety, professional training, and operational
              capability through practical advisory support shaped by
              international standards and African aviation needs.
            </p>

            <div className="about-hero-actions">
              <Link className="button button-primary" to="/services">
                Explore our services <ArrowUpRight size={17} />
              </Link>
              <a className="button button-secondary" href="#who-we-are">
                Discover SASI <ArrowDown size={16} />
              </a>
            </div>
          </div>

          <div className="about-hero-visual" aria-hidden="true">
            <div className="flight-visual-label flight-visual-label--top">
              FLIGHT OPERATIONS
            </div>

            <svg
              className="flight-route"
              viewBox="0 0 620 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="flight-route-path"
                d="M45 286 C155 270 175 170 280 190 C385 210 375 75 565 62"
              />
              <circle
                className="flight-route-point flight-route-point--start"
                cx="45"
                cy="286"
                r="5"
              />
              <circle
                className="flight-route-point flight-route-point--end"
                cx="565"
                cy="62"
                r="5"
              />
              <circle
                className="flight-route-pulse"
                cx="280"
                cy="190"
                r="9"
              />
              <g className="flight-aircraft">
                <path
                  d="M0 -7 L20 0 L0 7 L4 1 L-9 1 L-12 5 L-15 5 L-11 0 L-15 -5 L-12 -5 L-9 -1 L4 -1 Z"
                  fill="currentColor"
                />
              </g>
            </svg>

            <div className="flight-visual-label flight-visual-label--bottom">
              AFRICA · OPERATIONS · TRAINING
            </div>
          </div>
        </div>
      </section>

      <section className="section about-intro" id="who-we-are">
        <div className="container about-overview-grid">
          <div className="about-overview-heading">
            <span className="eyebrow">01 / Who we are</span>
            <h2>
              Practical aviation advisory.
              <br />
              <em>Purpose-driven progress.</em>
            </h2>
          </div>

          <div className="about-overview-copy">
            <p className="lead">
              Aviation requires more than written policies and formal
              compliance. It requires people, processes, and professional
              capabilities that work together in real operational environments.
            </p>

            <p>
              The Safer African Skies Initiative (SASI) focuses on aviation
              safety, training, airline operations, and organizational
              readiness. Its approach connects established aviation
              standards with the practical realities that organizations
              encounter when developing people, improving procedures, and
              strengthening their operations.
            </p>

            <p>
              Through advisory support and a focus on professional capability,
              SASI aims to help aviation organizations identify improvement
              opportunities, develop more consistent practices, and build
              stronger foundations for safe and sustainable growth.
            </p>

            <p>
              The initiative is African-focused and internationally oriented:
              recognizing the diversity of aviation environments across the
              continent while valuing the discipline, accountability, and
              standards needed for dependable aviation operations.
            </p>
          </div>
        </div>

        <div className="container about-focus-strip">
          <div>
            <span>01</span>
            <strong>Safety &amp; compliance</strong>
            <p>Supporting safer practices and standards-based operations.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Training &amp; capability</strong>
            <p>Strengthening professional knowledge and practical skills.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Operational readiness</strong>
            <p>Connecting processes, people, and organizational priorities.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft about-purpose">
        <div className="container about-purpose-grid">
          <div className="about-image-wrap">
            <span className="about-image-number">SASI / 02</span>

            <img
              className="editorial-image"
              src={training}
              alt="Aviation training environment representing professional learning and operational readiness"
              loading="lazy"
            />

            <div className="about-image-caption">
              <span>TRAINING &amp; OPERATIONAL READINESS</span>
              <span>SAFER AFRICAN SKIES</span>
            </div>
          </div>

          <div className="about-purpose-copy">
            <SectionHeader
              eyebrow="02 / Our purpose"
              title="Building capability for safer, stronger aviation."
            />

            <p>
              Aviation safety is supported by the quality of everyday
              decisions, the readiness of personnel, the reliability of
              procedures, and the ability of organizations to learn and
              improve.
            </p>

            <p>
              SASI exists to promote a practical approach to these
              responsibilities. Rather than treating safety, training, and
              operational performance as separate priorities, we recognize
              how closely they depend on one another.
            </p>

            <p>
              Our focus is to help organizations think clearly about their
              needs, strengthen their professional foundations, and pursue
              improvements that are relevant to their operating environments.
            </p>

            <div className="about-purpose-note">
              <Target size={23} />
              <p>
                <strong>Our guiding idea</strong>
                <span>
                  Stronger systems and capable people are essential
                  foundations for safer and more dependable aviation.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-mission-section">
        <div className="container">
          <div className="about-section-heading">
            <span className="eyebrow">03 / Our direction</span>
            <h2>
              Clear purpose.
              <br />
              <em>Long-term commitment.</em>
            </h2>
            <p>
              Our direction is shaped by the need for practical improvement,
              professional responsibility, and sustainable progress across
              African aviation.
            </p>
          </div>

          <div className="about-mission-grid">
            <article className="about-statement-card">
              <div className="about-statement-icon">
                <Target size={25} />
              </div>
              <span className="eyebrow">Our mission</span>
              <h3>Strengthening aviation capability.</h3>
              <p>
                To support aviation organizations through practical advisory
                services focused on safety, professional training, operational
                discipline, and readiness, helping translate standards and
                objectives into meaningful organizational practice.
              </p>
            </article>

            <article className="about-statement-card about-statement-card--dark">
              <div className="about-statement-icon">
                <Eye size={25} />
              </div>
              <span className="eyebrow">Our vision</span>
              <h3>A stronger future for African aviation.</h3>
              <p>
                To contribute to an African aviation sector where safety,
                professional capability, operational excellence, and
                internationally aligned practices support confidence,
                resilience, and sustainable development.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft about-principles-section">
        <div className="container">
          <div className="about-section-heading">
            <span className="eyebrow">04 / What guides us</span>
            <h2>
              Principles behind
              <br />
              <em>every recommendation.</em>
            </h2>
            <p>
              Meaningful advisory work starts with understanding what matters
              in aviation and applying that understanding with care,
              consistency, and professional responsibility.
            </p>
          </div>

          <div className="about-principles-grid">
            {principles.map((principle) => {
              const Icon = principle.icon

              return (
                <article className="about-principle-card" key={principle.number}>
                  <div className="about-principle-top">
                    <span>{principle.number}</span>
                    <Icon size={25} strokeWidth={1.5} />
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section about-approach-section">
        <div className="container">
          <div className="about-process-heading">
            <div>
              <span className="eyebrow">05 / How we work</span>
              <h2>
                From understanding
                <br />
                <em>to practical improvement.</em>
              </h2>
            </div>

            <p>
              Every organization has different needs. A thoughtful advisory
              process begins with context, identifies meaningful priorities,
              and focuses on improvements that can be carried into practice.
            </p>
          </div>

          <div className="about-process-grid">
            {process.map((step) => (
              <article className="about-process-card" key={step.number}>
                <span className="about-process-number">{step.number}</span>
                <div className="about-process-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft about-commitment-section">
        <div className="container about-commitment-grid">
          <div>
            <span className="eyebrow">06 / Our commitment</span>
            <h2>
              Aviation progress
              <br />
              <em>built on strong foundations.</em>
            </h2>
          </div>

          <div className="about-commitment-copy">
            <p>
              Safer and more capable aviation organizations are built through
              consistent effort. They require leadership, people who
              understand their responsibilities, effective training, and
              processes that support sound operational decisions.
            </p>

            <p>
              SASI is committed to a practical, collaborative approach that
              respects each organization's context and keeps safety,
              capability, and operational improvement at the center of
              the conversation.
            </p>

            <ul>
              <li>
                <CheckCircle2 size={18} />
                <span>Advice grounded in operational realities</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Professional development and training focus</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Attention to recognized aviation standards</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Long-term organizational capability</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="container about-cta-content">
          <div>
            <span className="eyebrow">LET'S MOVE AVIATION FORWARD</span>
            <h2>
              Stronger aviation
              <br />
              <em>starts with a conversation.</em>
            </h2>
            <p>
              Tell us about your organization's priorities in safety,
              training, or operational readiness.
            </p>
          </div>

          <Link className="about-cta-button" to="/contact">
            Start a conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
