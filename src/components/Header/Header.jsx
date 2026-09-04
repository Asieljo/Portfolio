import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.styles.scss'

const Header = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__mark" onClick={scrollToTop}>
          <span className="header__dot"></span>
          Asiel Rosiles
        </div>

        <button
          className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <Link
            to="/#about"
            className="header__nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/#projects"
            className="header__nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            to="/#languages"
            className="header__nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Stack
          </Link>
          <button
            className="header__nav-cta"
            onClick={onContactClick}
          >
            Let's talk
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
