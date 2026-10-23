
import { ArrowUpRight } from 'lucide-react'
import { Link } from '../router'

type Service = {
  slug: string
  title: string
  description: string
  image: string
}

type ServiceGridProps = {
  services: Service[]
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="service-grid">
      {services.map((service, index) => (
        <Link
          key={service.slug}
          to={`/services/${service.slug}`}
          className="service-card"
          aria-label={`Learn more about ${service.title}`}
        >
          <div className="service-card-image">
            <img src={service.image} alt="" loading="lazy" />
            <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
          </div>

          <div className="service-card-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <div className="service-arrow" aria-hidden="true">
              <ArrowUpRight size={19} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
