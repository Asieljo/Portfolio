import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactModal from '../../components/ContactModal/ContactModal';
import './NotFound.styles.scss';

/**
 * Not found page: the catch-all route (`*`), also prerendered as `404.html`.
 *
 * GitHub Pages serves 404.html for unknown paths, so mistyped links land here
 * instead of a blank page. It offers links back home and to the projects.
 */
const NotFound = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="not-found">
      <Header onContactClick={openContact} />
      <main>
        <section className="not-found__container" aria-labelledby="not-found-title">
          <span className="not-found__code" aria-hidden="true">404</span>
          <h1 id="not-found-title" className="not-found__title">
            This page doesn&apos;t exist
          </h1>
          <p className="not-found__text">
            The link may be broken or the page may have moved. Head back home or browse the
            projects instead.
          </p>

          <div className="not-found__actions">
            <Link to="/" className="not-found__button not-found__button--solid">
              Back home
            </Link>
            <Link
              to="/"
              state={{ section: 'projects' }}
              className="not-found__button not-found__button--outline"
            >
              See projects
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default NotFound;
