import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';
import './ContactCta.styles.scss';

// Closing call to action of the project pages, before the footer.
const ContactCta = ({ onContactClick }) => (
  <section className="contact-cta" aria-labelledby="contact-cta-title">
    <div className="contact-cta__container">
      <SectionHeader
        id="contact-cta-title"
        title="Let's work together"
        subtitle="Have a project in mind or want to know more about my experience? Let's talk."
      />

      <div className="contact-cta__actions">
        <button
          type="button"
          className="contact-cta__button contact-cta__button--solid"
          onClick={onContactClick}
        >
          Get in touch
        </button>
        <Link to="/#projects" className="contact-cta__button contact-cta__button--outline">
          More projects
        </Link>
      </div>
    </div>
  </section>
);

export default ContactCta;
