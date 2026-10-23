
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { Link, usePath } from '../router'
import { insights } from '../data/site'

export default function InsightDetail() {
  const path = usePath()
  const segments = path.split('/').filter(Boolean)
  const slug = segments[segments.length - 1] ?? ''
  const insight = insights.find((item) => item.slug === slug)

  if (!insight) {
    return (
      <main className="page">
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">SASI Aviation / Insights</span>
            <h1>
              Insight <em>not found.</em>
            </h1>
            <p>
              This article may have moved or is no longer available.
            </p>
            <Link className="text-link" to="/insights">
              <ArrowLeft size={17} /> Back to insights
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page insight-detail-page">
      <section className="article-hero">
        <div className="container narrow">
          <Link className="article-back-link" to="/insights">
            <ArrowLeft size={17} />
            All insights
          </Link>

          <div className="article-meta">
            <span>{insight.category}</span>
            <span className="article-meta-dot" />
            <span>{insight.date}</span>
          </div>

          <h1>{insight.title}</h1>

          <p className="article-excerpt">{insight.excerpt}</p>

          <div className="article-reading-note">
            <BookOpen size={17} />
            <span>SASI Aviation / Industry perspectives</span>
          </div>
        </div>
      </section>

      <article className="section article-content-section">
        <div className="container narrow">
          <div className="article-body">
            <p className="article-lead">{insight.excerpt}</p>

            <p>
              Aviation depends on the effective coordination of people,
              procedures, training, leadership, and safety practices.
              Understanding how these elements work together is important
              when organizations assess their capabilities and plan for
              improvement.
            </p>

            <h2>Understanding the operational context</h2>

            <p>
              Every organization operates within its own environment, with
              distinct responsibilities, requirements, and challenges.
              A useful starting point is to understand the current situation,
              identify the most important needs, and consider how existing
              processes support the intended operational objectives.
            </p>

            <h2>Turning knowledge into practice</h2>

            <p>
              Professional development and operational improvement require
              clear objectives, appropriate preparation, and consistent
              attention to implementation. Training, documented procedures,
              communication, and regular review can all contribute to a more
              structured approach when they are suitable for the organization
              and its applicable requirements.
            </p>

            <h2>Looking ahead</h2>

            <p>
              Continued learning and thoughtful evaluation help aviation
              organizations respond to changing needs. By keeping safety,
              professional capability, and operational realities in view,
              industry stakeholders can make better-informed decisions about
              their priorities and next steps.
            </p>
          </div>

          <div className="article-editorial-note">
            <span className="eyebrow">Editorial note</span>
            <p>
              This is general template copy. Replace it with the approved,
              article-specific content before publishing this insight.
            </p>
          </div>

          <div className="article-bottom-nav">
            <Link className="text-link" to="/insights">
              <ArrowLeft size={17} /> Back to all insights
            </Link>

            <Link className="text-link" to="/contact">
              Contact SASI Aviation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
