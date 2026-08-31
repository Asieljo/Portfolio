import profileFoto from '../../assets/images/landing-photo.png';
import './Landing.styles.scss';

const Landing = ({ onContactClick }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="landing" id="landing">
      <div className="landing__container">
        <div className="landing__content">
          <div className="landing__availability">
            <span>Available for opportunities</span>
            <span className="landing__availability-dot"></span>
          </div>
            <p className="landing__description">
              I'm learning about modern web development while I'm expanding my knowledge and skills to become a better developer.
            </p>
          <div className="landing__text">
            <h1 className="landing__title">
              Hi I'm Asiel
            </h1>
            <h2 className="landing__subtitle">
              Junior Developer
            </h2>
          </div>
            <img 
              src={profileFoto}
              alt="Asiel Rosiles" 
              className="landing__photo"
            />
        </div>

        <div className="landing__actions">
          <button className="landing__cta" onClick={onContactClick}>
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="landing__scroll" onClick={scrollToAbout}>
            Learn more
          </button>
        </div>
      </div>
    </section>
  )
}

export default Landing
