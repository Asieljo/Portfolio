import fotoPerfil from '../../assets/images/foto_perfil.jpg'
import './About.styles.scss'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <span className="about__label">About Me</span>
            <h2 className="about__title">
              Passionate about creating digital experiences
            </h2>
            <p className="about__description">
              I'm a student with knowledge and skills in Web Design and UX/UI, but I really want to become a <strong>React Developer</strong>. 
              I'm learning about <strong>Modern Web Development</strong> while I'm expanding my knowledge and skills in <strong>HTML, CSS and JavaScript</strong>. 
              My main goal is to specialize in creating digital products for mobile platforms and various other devices.
            </p>
            <p className="about__description">
              With discipline, commitment and openness to learning I'm confident that I will achieve my goal.
            </p>
          </div>

          <div className="about__photo-container">
            <img 
              src={fotoPerfil}
              alt="Asiel Rosiles" 
              className="about__photo"
            />
          </div>
        </div>

        <div className="about__skills">
          <div className="about__skill">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>HTML5</span>
          </div>
          <div className="about__skill">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>CSS3</span>
          </div>
          <div className="about__skill">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>JavaScript</span>
          </div>
          <div className="about__skill">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>React</span>
          </div>
          <div className="about__skill">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>UX/UI Design</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
