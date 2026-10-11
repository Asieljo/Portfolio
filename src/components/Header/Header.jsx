import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import DownloadIcon from '../../assets/icons/download.svg?react';
import cvUrl from '../../../Asiel_Rosiles_CV.pdf';
import './Header.styles.scss';

const Header = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <header className="header">
      <div className="header__container">
        <button type="button" className="header__brand" onClick={scrollToTop}>
          Asiel Rosiles
        </button>

        <button
          type="button"
          className={`header__burger${isMenuOpen ? ' header__burger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav${isMenuOpen ? ' header__nav--open' : ''}`}>
          <Link to="/" className="header__nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/#about" className="header__nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/#projects" className="header__nav-link" onClick={closeMenu}>
            Projects
          </Link>
        </nav>

        <div className={`header__actions${isMenuOpen ? ' header__actions--open' : ''}`}>
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Asiel_Rosiles_CV.pdf"
            className="header__button"
            onClick={closeMenu}
          >
            <DownloadIcon className="header__button-icon" />
            Resume
          </a>

          <button
            type="button"
            className="header__button header__button--plain"
            onClick={() => {
              closeMenu();
              onContactClick();
            }}
          >
            Contact me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
