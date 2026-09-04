import { useState } from 'react'
import Header from '../../components/Header/Header'
import Landing from '../../components/Landing/Landing'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Education from '../../components/Education/Education'
import Languages from '../../components/Languages/Languages'
import Tools from '../../components/Tools/Tools'
import SoftSkills from '../../components/SoftSkills/SoftSkills'
import ContactModal from '../../components/ContactModal/ContactModal'
import './Home.styles.scss'

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <>
      <Header onContactClick={openContact} />
      <main>
        <Landing onContactClick={openContact} />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Education />
        <hr className="divider" />
        <Languages />
        <Tools />
        <SoftSkills />
      </main>
      <footer className="footer">
        <div className="footer__container">
          <span className="footer__copy">&copy; 2026 ASIEL_ROSILES</span>
          <span className="footer__tech">REACT &middot; VITE &middot; SASS</span>
        </div>
      </footer>
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </>
  )
}

export default Home
