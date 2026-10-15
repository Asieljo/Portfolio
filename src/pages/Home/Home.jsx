import { useState } from 'react';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Ticker from '../../components/Ticker/Ticker';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
import ContactModal from '../../components/ContactModal/ContactModal';
import './Home.styles.scss';

/**
 * Home page (`/`): `Header`, then the `Landing` hero, `Ticker`, `About` and
 * `Projects` sections, followed by the `Footer`.
 *
 * Owns the open state of the `ContactModal`, which the header and the hero
 * open through `onContactClick`.
 */
const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="home">
      <Header onContactClick={openContact} />
      <main>
        <Landing onContactClick={openContact} />
        <Ticker />
        <About />
        <Projects />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default Home;
