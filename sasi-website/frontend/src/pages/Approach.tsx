
import { ArrowRight, ClipboardCheck, Compass, Settings2, TrendingUp } from 'lucide-react'
import { Link } from '../router'
import SectionHeader from '../components/SectionHeader'

const items = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Understand operational needs, people, risks, requirements, and existing capabilities.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Develop practical training, safety, and operational solutions tailored to each need.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Prepare',
    description:
      'Turn plans into actionable procedures, training, documentation, and operational readiness.',
    icon: Settings2,
  },
  {
    number: '04',
    title: 'Improve',
    description:
      'Use feedback, reviews, and operational learning to strengthen performance continuously.',
    icon: TrendingUp,
  },
]

export default function Approach() {
  return (
    <main className="page approach-page">
      <section className="page-hero approach-hero">
        <div className="container">
          <span className="eyebrow">SASI Aviation / Approach</span>

          <h1>
            From standards
            <br />
            <em>to practice.</em>
          </h1>

          <p>
            A structured, practical approach that connects aviation safety,
            people, and operational performance.
          </p>

          <a className="button button-primary" href="#our-method">
            Discover our method <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section approach-intro">
        <div className="container approach-intro-grid">
          <div>
            <span className="eyebrow">How we work</span>
            <h2>
              Clear thinking.
              <br />
              <em>Practical outcomes.</em>
            </h2>
          </div>

          <p>
            Every aviation organization has different needs and challenges.
            Our approach starts by understanding the situation, identifying
            priorities, and developing practical steps that support safety,
            readiness, and continuous improvement.
          </p>
        </div>
      </section>

      <section className="section approach-process" id="our-method">
        <div className="container">
          <SectionHeader
            eyebrow="Our method"
            title="Four stages. One operational objective."
          />

          <div className="approach-grid">
            {items.map((item, index) => {
              const Icon = item.icon

              return (
                <article className="approach-card" key={item.number}>
                  <span className="approach-card-number">0{index + 1}</span>
                  <div className="approach-card-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="approach-cta">
        <div className="container approach-cta-inner">
          <div>
            <span className="eyebrow">Let's work together</span>
            <h2>
              Make your next step
              <br />
              <em>count.</em>
            </h2>
            <p>
              Discuss your aviation training, safety, or operational
              requirements with our team.
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
