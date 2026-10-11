import { useState } from 'react';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Ticker from '../../components/Ticker/Ticker';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
import ContactModal from '../../components/ContactModal/ContactModal';
import './Home.styles.scss';

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
