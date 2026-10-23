
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from '../router'
import landing from '../assets/hero-airbus.gif'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 120)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="sasi-hero-title">
        <div className="hero-media" aria-hidden="true">
          <img
            className="hero-gif"
            src={landing}
            alt=""
          />
          <div className="hero-shade" />
          <div className="hero-grid" />
        </div>

        <div
          className={`container hero-content ${
            loaded ? 'hero-content--loaded' : ''
          }`}
        >
          <div className="hero-kicker">
            <span className="rule" />
            SASI · SAFER AFRICAN SKIES INITIATIVE
          </div>

          <h1 id="sasi-hero-title">
            Advancing
            <br />
            <em>African aviation.</em>
          </h1>

          <p>
            Practical advisory built on operational experience,
            safety culture and international standards.
          </p>

          <div className="hero-actions">
            <Link className="button button-light" to="/contact">
              Start a conversation
              <ArrowUpRight size={17} />
            </Link>

            <Link className="button button-secondary" to="/services">
              Explore services
            </Link>
          </div>
        </div>

        <div className="container hero-bottom">
          <span className="hero-slide-label">
            AVIATION ADVISORY / AFRICA
          </span>

          <div className="hero-progress">
            <span className="hero-progress-active hero-progress-live" />
          </div>

          <a className="scroll-cue" href="#intro">
            Discover SASI
            <ArrowDown size={15} />
          </a>
        </div>
      </section>

      {/* SHORT INTRODUCTION */}
      <section className="hero-intro" id="intro">
        <div className="container hero-intro-inner">
          <div className="hero-intro-heading">
            <span className="eyebrow">A practical aviation partner</span>
            <h2>
              Stronger systems.
              <br />
              <em>Safer operations.</em>
            </h2>
          </div>

          <div className="hero-intro-content">
            <p className="lead">
              African aviation deserves advisory support grounded
              in operational reality—not just documentation.
            </p>

            <p>
              SASI works with aviation organizations to strengthen
              training, improve safety practices and build the
              operational foundations for sustainable growth.
            </p>

            <Link className="text-link" to="/about">
              Get to know SASI
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="container hero-intro-pillars">
          <div className="hero-intro-pillar">
            <span>01</span>
            <p>Safety & compliance</p>
          </div>

          <div className="hero-intro-pillar">
            <span>02</span>
            <p>Training & capability</p>
          </div>

          <div className="hero-intro-pillar">
            <span>03</span>
            <p>Airline readiness</p>
          </div>
        </div>
      </section>
    </>
  )
}
