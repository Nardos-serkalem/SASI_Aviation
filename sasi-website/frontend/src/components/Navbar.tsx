import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from '../router'
import Logo from './Logo'

const links = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Approach', '/approach'],
  ['Founder', '/founder'],
  ['Insights', '/insights'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <NavLink key={href} to={href} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact">
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </nav>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-nav">
          {links.map(([label, href]) => (
            <Link key={href} to={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight size={15} /></Link>
        </div>
      )}
    </header>
  )
}
