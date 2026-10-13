import { useEffect, useRef } from 'react';
import './ContactModal.styles.scss';
import PortraitPhoto from '../../assets/images/footer.webp';
import cvUrl from '../../../Asiel_Rosiles_CV.pdf';

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
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@Asieljo',
    href: 'https://github.com/Asieljo',
    external: true,
  },
  {
    id: 'cv',
    label: 'CV',
    value: 'Download CV',
    href: cvUrl,
    external: true,
    download: 'Asiel_Rosiles_CV.pdf',
  },
];

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;

      const focusable = modalRef.current.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      const focusableList = Array.from(focusable).filter(
        (el) => !el.hasAttribute('disabled')
      );
      if (focusableList.length === 0) return;

      const first = focusableList[0];
      const last = focusableList[focusableList.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const firstFocusable = modalRef.current.querySelector(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
      document.body.style.overflow = 'unset';
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-text"
      ref={modalRef}
    >
      <div className="contact-modal__panel">
        <h2 id="contact-modal-title" className="contact-modal__title">
          ¡Contact me for more!
        </h2>

        <div className="contact-modal__intro">
          <img
            className="contact-modal__photo"
            src={PortraitPhoto}
            alt="Portrait of Asiel Rosiles"
          />
          <div id="contact-modal-text" className="contact-modal__bio">
            <p className="contact-modal__text">
              Designer by day, frequent guitarist, AI user that goes beyond the basics and professional
              curious mind; a fan of technology, digital art and any topic that promises to
              answer the eternal question: “Why?”.
            </p>
            <p className="contact-modal__text contact-modal__text--strong">
              Experts recommend keeping him away from Google and any interesting subjects.
            </p>
          </div>
        </div>

        <ul className="contact-modal__links">
          {contactLinks.map(({ id, label, value, href, external, download }) => (
            <li key={id} className="contact-modal__item">
              <a
                className="contact-modal__link"
                href={href}
                download={download}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <span className="contact-modal__label">{label}</span>
                <span className="contact-modal__value">{value}</span>
              </a>
            </li>
          ))}
        </ul>

        <button type="button" className="contact-modal__close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
