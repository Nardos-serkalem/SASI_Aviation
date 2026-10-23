
import { Link } from '../router'
import logo from '../assets/logo.png'

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="SASI home">
      <img
        src={logo}
        alt="Safer African Skies Initiative"
        className="logo-image"
      />
    </Link>
  )
}
