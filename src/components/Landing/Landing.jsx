import HeroImageBlue from '../../assets/images/hero-image-blue.webp';
import HeroImageDark from '../../assets/images/hero-image-dark.webp';
import HeroImageOrange from '../../assets/images/hero-image-orange.webp';
import { useTheme } from '../../hooks/useTheme';
import './Landing.styles.scss';

// Each theme has its own tint of the hero artwork.
const heroImages = {
  primary: HeroImageBlue,
  secondary: HeroImageDark,
  complementary: HeroImageOrange,
};

const heroStats = [
  { id: 'projects', value: '04', label: 'Projects Shipped' },
  { id: 'years', value: '+02', label: 'Years Learning' },
  { id: 'focus', value: 'UX/UI', label: 'Current Focus' },
];

/**
 * Hero section of the home page: the main heading, a short lead, the hero
 * image (tinted to match the active theme) and two calls to action.
 *
 * "View projects" scrolls to the projects section and "Get in touch" calls
 * `onContactClick`, which opens the contact modal. A row of stats closes the
 * section.
 */
const Landing = ({ onContactClick }) => {
  const { theme } = useTheme();

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
          <h1 className="hero__title">
            UX/UI Designer with strong React skills, bridging design and development.
          </h1>

          <p className="hero__lead">
            I turn ideas into responsive, thoughtfully-built products, one component at a time.
          </p>

          <div className="hero__media">
            <img
              className="hero__image"
              src={heroImages[theme]}
              alt="Build more"
              fetchPriority="high"
            />
          </div>

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
      </div>
    </section>
  );
};

export default Landing;
