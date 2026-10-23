
import { ArrowUpRight } from 'lucide-react'
import { Link } from '../router'
import { insights } from '../data/site'

type Insight = (typeof insights)[number]

export default function InsightCard({
  insight,
}: {
  insight: Insight
}) {
  return (
    <article className="insight-card">
      <div className="insight-card-top">
        <span className="insight-card-category">
          {insight.category}
        </span>
        <ArrowUpRight size={19} aria-hidden="true" />
      </div>

      <div className="insight-card-body">
        <p className="insight-card-date">{insight.date}</p>

        <h3>{insight.title}</h3>

        <p className="insight-card-excerpt">{insight.excerpt}</p>
      </div>

      <Link
        className="insight-card-link"
        to={`/insights/${insight.slug}`}
        aria-label={`Read ${insight.title}`}
      >
        Read insight
        <ArrowUpRight size={17} />
      </Link>
    </article>
  )
}
