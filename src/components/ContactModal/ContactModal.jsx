import { useEffect, useRef } from 'react';
import './ContactModal.styles.scss';
import DownloadIcon from '../../assets/icons/download.svg?react';
import cvUrl from '../../../Asiel_Rosiles_CV.pdf';

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return

    const previouslyFocused = document.activeElement

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleTab = (e) => {
      if (e.key !== 'Tab') return

      const focusable = modalRef.current.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      )
      const focusableList = Array.from(focusable).filter(
        (el) => !el.hasAttribute('disabled')
      )
      if (focusableList.length === 0) return

      const first = focusableList[0]
      const last = focusableList[focusableList.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    const firstFocusable = modalRef.current.querySelector(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    )
    firstFocusable?.focus()
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleTab)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleTab)
      document.body.style.overflow = 'unset'
      previouslyFocused?.focus()
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="contact-modal"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      ref={modalRef}
    >
      <div className="contact-modal__content">
        <button className="contact-modal__close" onClick={onClose} aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h2 id="contact-modal-title" className="contact-modal__title">Get in Touch</h2>
        <p className="contact-modal__subtitle">Let's connect and discuss opportunities</p>

        <div className="contact-modal__links">
          <a 
            href="mailto:rosiles.garcia.asiel@gmail.com" 
            className="contact-modal__link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>Email</span>
            <small>rosiles.garcia.asiel@gmail.com</small>
          </a>

          <a 
            href="https://www.linkedin.com/in/asiel-rosiles-7a255a32b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-modal__link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
            <small>Asiel Rosiles</small>
          </a>

          <a 
            href="https://github.com/Asieljo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-modal__link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
            <small>@Asieljo</small>
          </a>
          <a 
            href={cvUrl}
            target="_blank" 
            rel="noopener noreferrer"
            download="Asiel_Rosiles_CV.pdf"
            className='contact-modal__link'
          >
            <DownloadIcon className="contact-modal__download-icon"/>
            <span>CV</span>
            <small>Download CV</small>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
