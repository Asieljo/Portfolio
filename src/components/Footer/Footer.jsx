import Wordmark from '../../assets/images/wordmark.svg?react';
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
    label: 'Linkedin',
    value: 'Asiel Rosiles',
    href: 'https://www.linkedin.com/in/asiel-rosiles-7a255a32b/',
    external: true,
  },
  {
    id: 'github',
    label: 'Github',
    value: '@Asieljo',
    href: 'https://github.com/Asieljo',
    external: true,
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <h2 className="footer__name">
        {/* svgr's `icon` option forces a 1em square; dropping it keeps the
            viewBox ratio so the width set in CSS drives the height. */}
        <Wordmark
          className="footer__wordmark"
          width={undefined}
          height={undefined}
          role="img"
          aria-label="Asiel Rosiles"
        />
      </h2>

      <ul className="footer__contacts">
        {contactLinks.map((link) => (
          <li key={link.id} className="footer__contact">
            <a
              className="footer__link"
              href={link.href}
              {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {link.label}: {link.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
