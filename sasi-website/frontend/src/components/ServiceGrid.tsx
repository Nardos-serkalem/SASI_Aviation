
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
      {services.map((service) => (
        <Link
          key={service.slug}
          to={`/services/${service.slug}`}
          className="service-card"
          aria-label={`Learn more about ${service.title}`}
        >
          <div className="service-card-image">
            <img src={service.image} alt="" loading="lazy" />
            <div className="service-image-overlay" />
          </div>

          <div className="service-card-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <div className="service-card-bottom">
              <span className="service-link">Explore service</span>
              <span className="service-arrow" aria-hidden="true">
                <ArrowUpRight size={19} />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
