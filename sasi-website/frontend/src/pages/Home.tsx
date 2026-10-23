
import { ArrowUpRight } from 'lucide-react'
import { Link } from '../router'

import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import ServiceGrid from '../components/ServiceGrid'

import runway from '../assets/runway-break.jpg'

const services = [
  {
    slug: 'pilot-training',
    title: 'Pilot Training Advisory',
    description:
      'Strategic guidance on pilot training programmes, competency development, training standards and operational readiness.',
    image: runway,
  },
  {
    slug: 'airline-startup-support',
    title: 'Airline Start-Up Support',
    description:
      'Support for airline planning, certification preparation, operational setup and launch readiness.',
    image: runway,
  },
  {
    slug: 'safety-compliance',
    title: 'Safety & Compliance',
    description:
      'Practical guidance to strengthen safety management, compliance processes and alignment with international aviation standards.',
    image: runway,
  },
  {
    slug: 'cabin-training',
    title: 'Cabin Training',
    description:
      'Cabin crew development focused on safety procedures, emergency preparedness, service quality and operational performance.',
    image: runway,
  },
  {
    slug: 'maintenance-training',
    title: 'Maintenance Training',
    description:
      'Technical training support designed to strengthen maintenance capability, reliability and professional standards.',
    image: runway,
  },
  {
    slug: 'aviation-operations',
    title: 'Aviation Operations',
    description:
      'Operational advisory to improve efficiency, organisational performance, safety and sustainable aviation growth.',
    image: runway,
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="section section-about">
        <div className="container split">
          <div>
            <SectionHeader
              number="01"
              eyebrow="About SASI"
              title="Africa-focused aviation advisory. International standards."
            />
          </div>

          <div className="section-copy">
            <p className="lead">
              SASI exists to strengthen aviation safety, operational discipline
              and professional training across the African aviation sector.
            </p>

            <p>
              We help airlines and aviation organisations build systems that
              are safe, scalable, compliant and commercially realistic.
              Our approach connects practical operational experience with
              internationally recognised standards.
            </p>

            <Link className="text-link" to="/about">
              Learn about SASI
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="image-band">
        <img src={runway} alt="Aircraft on a runway" />
        <div className="image-band-overlay" />

        <div className="container image-band-copy">
          <span className="eyebrow">Operational discipline</span>

          <h2>
            Safety is built into
            <br />
            <em>every decision.</em>
          </h2>
        </div>
      </section>

      <section className="section services-home">
        <div className="container">
          <SectionHeader
            number="02"
            eyebrow="Our services"
            title="Advisory services designed for real aviation challenges."
            text="Focused support across training, safety, airline operations and organisational readiness."
          />

          <ServiceGrid services={services} />
        </div>
      </section>
    </>
  )
}
