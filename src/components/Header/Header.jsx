import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss'

const Header = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

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
          <ul className="header__nav-list">
            <li>
              <button 
                className="header__nav-link"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button 
                className="header__nav-link"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                className="header__nav-link"
                onClick={() => scrollToSection('education')}
              >
                Education
              </button>
            </li>
            <li>
              <button 
                className="header__nav-link"
                onClick={() => scrollToSection('skills')}
              >
                Soft Skills
              </button>
            </li>
            <li>
              <button 
                className="header__nav-btn"
                onClick={onContactClick}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
