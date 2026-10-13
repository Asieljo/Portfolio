import { useEffect, useRef } from 'react';
import './ContactModal.styles.scss';
import CloseIcon from '../../assets/icons/close.svg?react';
import DownloadIcon from '../../assets/icons/download.svg?react';
import GithubIcon from '../../assets/icons/github.svg?react';
import LinkedinIcon from '../../assets/icons/linkedin.svg?react';
import MailIcon from '../../assets/icons/mail.svg?react';
import cvUrl from '../../../Asiel_Rosiles_CV.pdf';

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'rosiles.garcia.asiel@gmail.com',
    href: 'mailto:rosiles.garcia.asiel@gmail.com',
    Icon: MailIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Asiel Rosiles',
    href: 'https://www.linkedin.com/in/asiel-rosiles-7a255a32b/',
    Icon: LinkedinIcon,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@Asieljo',
    href: 'https://github.com/Asieljo',
    Icon: GithubIcon,
    external: true,
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
        <div className="contact-modal__header">
          <div className="contact-modal__heading">
            <h2 id="contact-modal-title" className="contact-modal__title">
              Get in touch
            </h2>
            <button
              type="button"
              className="contact-modal__close"
              onClick={onClose}
              aria-label="Close contact dialog"
            >
              <CloseIcon className="contact-modal__close-icon" aria-hidden="true" />
            </button>
          </div>
          <p id="contact-modal-text" className="contact-modal__text">
            Let&apos;s connect and discuss opportunities.
          </p>
        </div>

        <ul className="contact-modal__links">
          {contactLinks.map(({ id, label, value, href, Icon, external }) => (
            <li key={id} className="contact-modal__item">
              <a
                className="contact-modal__link"
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <span className="contact-modal__icon-box" aria-hidden="true">
                  <Icon className="contact-modal__icon" />
                </span>
                <span className="contact-modal__link-text">
                  <span className="contact-modal__label">{label}</span>
                  <span className="contact-modal__value">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="contact-modal__footer">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Asiel_Rosiles_CV.pdf"
            className="contact-modal__resume"
          >
            <DownloadIcon className="contact-modal__resume-icon" aria-hidden="true" />
            Download resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
