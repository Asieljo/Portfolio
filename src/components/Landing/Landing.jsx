import HeroImage from '../../assets/images/hero-image-blue.png';
import './Landing.styles.scss';

const heroStats = [
  { id: 'projects', value: '04', label: 'Projects shipped' },
  { id: 'years', value: '+02', label: 'Years learning' },
  { id: 'focus', value: 'UX/UI', label: 'Current focus' },
];

const Landing = ({ onContactClick }) => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="landing">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__pulse"></span>
            Available for opportunities
          </span>

          <h1 className="hero__title">
            UX/UI Designer with strong React skills, bridging design and development.
          </h1>

          <p className="hero__lead">
            I turn ideas into responsive, thoughtfully-built products, one component at a time.
          </p>

          <div className="hero__actions">
            <button
              type="button"
              className="hero__button hero__button--solid"
              onClick={scrollToProjects}
            >
              View projects
            </button>
            <button
              type="button"
              className="hero__button hero__button--outline"
              onClick={onContactClick}
            >
              Get in touch
            </button>
          </div>

          <dl className="hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.id} className="hero__stat">
                <dt className="hero__stat-label">{stat.label}</dt>
                <dd className="hero__stat-value">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual">
          <span className="hero__visual-text" aria-hidden="true">
            <span>Build</span>
            <span>More</span>
          </span>
          <img
            className="hero__image"
            src={HeroImage}
            alt="Asiel Rosiles working on a front-end project"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
