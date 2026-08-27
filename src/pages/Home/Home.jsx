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

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <>
      <Header onContactClick={openContact} />
      <main>
        <Landing onContactClick={openContact} />
        <About />
        <Projects />
        <Education />
        <Languages />
        <Tools />
        <SoftSkills />
      </main>
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </>
  )
}

export default Home
