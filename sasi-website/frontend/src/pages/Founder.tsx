
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react'
import { Link } from '../router'
import SectionHeader from '../components/SectionHeader'
import flightDeck from '../assets/flight-deck.jpg'

const credentials = [
  {
    icon: Award,
    title: 'Captain',
    description: 'Airline flight operations experience.',
  },
  {
    icon: ShieldCheck,
    title: 'TRI / TRE',
    description: 'Training and checking responsibilities.',
  },
  {
    icon: GraduationCap,
    title: 'Training Manager',
    description: 'Aviation training leadership.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Chief Pilot',
    description: 'Flight operations leadership.',
  },
]

export default function Founder() {
  return (
    <main className="page founder-page">
      {/* Hero */}
      <section className="page-hero founder-hero">
        <div className="container">
          <span className="eyebrow">SASI Aviation / Leadership</span>

          <h1>
            Experience from
            <br />
            <em>the flight deck.</em>
          </h1>

          <p>
            Professional aviation leadership, training expertise, and
            operational perspective brought together to support aviation
            excellence.
          </p>

          <a className="button button-primary" href="#founder-profile">
            Meet the founder <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Founder profile */}
      <section className="section founder-profile" id="founder-profile">
        <div className="container founder-profile-grid">
          <div className="founder-portrait">
            <div className="portrait-frame portrait-frame--large">
              <img
                src={flightDeck}
                alt="Aircraft flight deck representing aviation experience"
                loading="lazy"
              />
            </div>

            <div className="founder-image-caption">
              <span className="founder-caption-line" />
              <p>Aviation leadership and operational experience</p>
            </div>
          </div>

          <div className="founder-biography">
            <SectionHeader
              eyebrow="Capt. Mikyas T. Mulugeta"
              title="Aviation experience at the centre of advisory."
            />

            <p className="lead">
              SASI Aviation is led by an experienced aviation professional
              with a background in airline leadership, training, and Airbus
              wide-body operations.
            </p>

            <p className="section-copy">
              The founder's professional experience includes serving as
              Captain, Type Rating Instructor / Type Rating Examiner
              (TRI/TRE), Training Manager, and Chief Pilot. This combination
              of flight operations and training experience informs SASI
              Aviation's focus on professional standards, operational
              preparedness, and safety-conscious aviation development.
            </p>

            <p className="section-copy">
              Further details about career history, aircraft types, airlines,
              flight hours, and qualifications can be included when verified
              and approved for publication.
            </p>

            <Link className="founder-contact-link" to="/contact">
              Connect with SASI Aviation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience and credentials */}
      <section className="section founder-experience">
        <div className="container">
          <SectionHeader
            eyebrow="Professional background"
            title="Experience across key aviation responsibilities."
          />

          <p className="founder-experience-intro">
            The founder's experience spans flight operations, training,
            professional assessment, and aviation leadership.
          </p>

          <div className="founder-credentials-grid">
            {credentials.map((credential) => {
              const Icon = credential.icon

              return (
                <article
                  className="founder-credential-card"
                  key={credential.title}
                >
                  <Icon size={25} strokeWidth={1.6} />

                  <h3>{credential.title}</h3>

                  <p>{credential.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership philosophy */}
      <section className="founder-philosophy">
        <div className="container founder-philosophy-inner">
          <span className="eyebrow">The perspective</span>

          <h2>
            Connecting professional knowledge
            <br />
            with <em>operational practice.</em>
          </h2>

          <p>
            SASI Aviation's advisory approach recognizes the importance of
            people, training, safety, and effective operations in building
            a capable and responsible aviation environment.
          </p>
        </div>
      </section>

      {/* Contact call to action */}
      <section className="founder-cta">
        <div className="container founder-cta-inner">
          <div>
            <span className="eyebrow">Work with us</span>

            <h2>
              Let's move aviation
              <br />
              <em>forward together.</em>
            </h2>

            <p>
              Contact SASI Aviation to discuss your training, safety, or
              operational advisory requirements.
            </p>
          </div>

          <Link className="button button-primary" to="/contact">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
