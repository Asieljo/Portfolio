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
        <span className="header__logo" onClick={scrollToTop}>
          Asiel Rosiles
        </span>

        <button 
          className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <div className="header__nav-list">
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
              Projects
            </Link>
            <Link 
              to="/#education"
              className="header__nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Link 
              to="/#skills"
              className="header__nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <button 
              className="header__nav-btn"
              onClick={onContactClick}
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
