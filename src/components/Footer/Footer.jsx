import './Footer.styles.scss';

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'rosiles.garcia.asiel@gmail.com',
    href: 'mailto:rosiles.garcia.asiel@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Asiel Rosiles',
    href: 'https://www.linkedin.com/in/asiel-rosiles-7a255a32b/',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@Asieljo',
    href: 'https://github.com/Asieljo',
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__content">
        <h2 className="footer__name" aria-label="Asiel Rosiles">
          <span className="footer__name-line">Asiel</span>
          <span className="footer__name-line">Rosiles</span>
        </h2>

        <ul className="footer__contacts">
          {contactLinks.map((link) => (
            <li key={link.id} className="footer__contact">
              <span className="footer__contact-label">{link.label}:</span>
              <a
                className="footer__contact-link"
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>

        <p className="footer__copy">&copy; 2026 Asiel Rosiles</p>
      </div>
    </div>
  </footer>
);

export default Footer;
