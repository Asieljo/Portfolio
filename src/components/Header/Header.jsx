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
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About', section: 'about' },
  { id: 'projects', label: 'Projects', section: 'projects' },
];

/**
 * Sticky top bar shared by every page: brand link, main navigation (Home,
 * About, Projects), a "Contact me" button, a resume download and the theme
 * toggle.
 *
 * - On the home page the links scroll to their section; on other pages they
 *   navigate back home and pass the section in the router state.
 * - The theme button cycles through the primary, secondary and complementary
 *   themes (see `ThemeProvider`).
 * - Below the tablet breakpoint the navigation collapses into a burger menu
 *   that exposes its state through `aria-expanded`.
 */
const Header = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { nextTheme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  // Off the home page the links navigate back to it, passing the section in
  // the router state instead of a hash so the URL stays clean; the effect
  // below then scrolls to it once Home has rendered.
  const handleNavClick = (event, section) => {
    closeMenu();
    if (location.pathname !== '/') return;
    event.preventDefault();
    if (section) {
      scrollToSection(section);
    } else {
      scrollToTop();
    }
  };

  const handleContactClick = () => {
    closeMenu();
    onContactClick();
  };

  // Hashes are still handled for in-page anchors (e.g. the case study phases).
  useEffect(() => {
    const section = location.state?.section ?? location.hash.slice(1);
    if (section) {
      scrollToSection(section);
    }
  }, [location]);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__brand" onClick={handleNavClick}>
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
                to="/"
                state={link.section && { section: link.section }}
                className="header__link"
                onClick={(event) => handleNavClick(event, link.section)}
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
          aria-label={`Switch to ${nextTheme} theme`}
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
