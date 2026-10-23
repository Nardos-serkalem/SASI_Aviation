
import { ArrowRight, BookOpen, ArrowUpRight } from 'lucide-react'
import { Link } from '../router'
import SectionHeader from '../components/SectionHeader'
import InsightCard from '../components/InsightCard'
import { insights } from '../data/site'

export default function Insights() {
  const featured = insights[0]
  const remaining = insights.slice(1)

  return (
    <main className="page insights-page">
      <section className="page-hero insights-hero">
        <div className="container">
          <span className="eyebrow">SASI Aviation / Insights</span>

          <h1>
            Aviation
            <br />
            <em>perspectives.</em>
          </h1>

          <p>
            Ideas and perspectives on aviation safety, professional training,
            operational readiness, and the future of African aviation.
          </p>

          <a className="button button-primary" href="#latest-insights">
            Explore insights <ArrowRight size={18} />
          </a>

          <div className="insights-hero-note">
            <BookOpen size={19} />
            <span>Knowledge, experience, and practical perspectives.</span>
          </div>
        </div>
      </section>

      {featured && (
        <section className="insights-featured-section">
          <div className="container">
            <div className="insights-featured">
              <div className="insights-featured-label">
                <span className="eyebrow">Featured perspective</span>
                <span className="insights-featured-number">01 / FEATURED</span>
              </div>

              <div className="insights-featured-content">
                <div className="insights-featured-meta">
                  <span>{featured.category}</span>
                  <span>{featured.date}</span>
                </div>

                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>

                <Link
                  className="insights-featured-link"
                  to={`/insights/${featured.slug}`}
                >
                  Read featured insight <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section insights-list-section" id="latest-insights">
        <div className="container">
          <SectionHeader
            eyebrow="Explore our thinking"
            title="Practical ideas for aviation leaders."
          />

          <p className="insights-section-description">
            Explore perspectives designed to encourage informed discussion,
            strengthen professional understanding, and support better
            aviation practices.
          </p>

          {insights.length === 0 ? (
            <div className="insights-empty">
              <BookOpen size={28} />
              <h3>New perspectives are on the way.</h3>
              <p>
                Check back for articles and updates from SASI Aviation.
              </p>
            </div>
          ) : remaining.length > 0 ? (
            <div className="insight-grid">
              {remaining.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
          ) : (
            <p className="insights-single-note">
              Explore the featured insight above to read our latest perspective.
            </p>
          )}
        </div>
      </section>

      <section className="insights-cta">
        <div className="container insights-cta-inner">
          <div>
            <span className="eyebrow">Continue the conversation</span>
            <h2>
              Better understanding.
              <br />
              <em>Stronger aviation.</em>
            </h2>
            <p>
              Have a question about aviation training, safety, or operations?
              Get in touch with our team.
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
