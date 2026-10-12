import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import { scrollToSection } from '../../utils/scrollToSection';
import { useTheme } from '../../hooks/useTheme';
import ThemeIcon from '../../assets/icons/theme.svg?react';
import MenuIcon from '../../assets/icons/menu.svg?react';
import CloseIcon from '../../assets/icons/close.svg?react';
import cvUrl from '../../../Asiel_Rosiles_CV.pdf';
import './Header.styles.scss';

const navLinks = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'projects', label: 'Projects', to: '/#projects' },
];

const Header = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (event, to) => {
    closeMenu();
    if (to === '/') {
      event.preventDefault();
      scrollToTop();
      return;
    }
    event.preventDefault();
    scrollToSection(to.replace('/#', ''));
  };

  const handleContactClick = () => {
    closeMenu();
    onContactClick();
  };

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
        <Link to="/" className="header__brand" onClick={(event) => handleNavClick(event, '/')}>
          Asiel Rosiles
        </Link>

        <div
          id="header-menu"
          className={`header__menu${isMenuOpen ? ' header__menu--open' : ''}`}
        >
          <nav className="header__nav" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                className="header__link"
                onClick={(event) => handleNavClick(event, link.to)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button type="button" className="header__contact" onClick={handleContactClick}>
            Contact me
          </button>
        </div>

        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          download="Asiel_Rosiles_CV.pdf"
          className="header__resume"
        >
          Resume
        </a>

        <button
          type="button"
          className="header__icon-button header__theme"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          <ThemeIcon className="header__icon" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="header__icon-button header__burger"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="header-menu"
        >
          {isMenuOpen ? (
            <CloseIcon className="header__icon" aria-hidden="true" />
          ) : (
            <MenuIcon className="header__icon" aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
