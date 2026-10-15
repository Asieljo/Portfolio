import './About.styles.scss';
import AboutPhoto from '../../assets/images/about-photo.webp';
import cvUrl from '../../../Asiel_Rosiles_CV.pdf';

const taglines = ['Builder.', 'Designer.', 'Curious mind.'];

const certifications = [
  {
    id: 1,
    title: 'Certification of User Experience Designer, Fundación Carlos Slim (2024).',
  },
  {
    id: 2,
    title: 'Certification of Complete Web & Mobile Designer: UI/UX, Figma and more, ZTM Academy (2024).',
  },
  {
    id: 3,
    title: 'Education in HTML, CSS, JS and React.',
  },
];

/**
 * "About me" section of the home page (`#about`): taglines, a short bio, the
 * list of certifications and courses, a resume download and a portrait.
 *
 * The header navigation scrolls to this section through its `about` id.
 */
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <p className="about__taglines">
            {taglines.map((line) => (
              <span key={line} className="about__tagline">
                {line}
              </span>
            ))}
          </p>

          <h2 className="about__title">About me</h2>

          <p className="about__text">
            UX/UI designer with strong development skills. I design with the code in mind and build consequently, from tokens and reusable components to responsive layouts, so teams get a smoother handoff and users get an interface that works exactly as intended.
          </p>

          <p className="about__text about__text--strong">
            No bootcamp, no formal academic degrees — my background is built on consistent self-directed learning, courses, certifications and real projects shipped along the way.
          </p>

          <h3 className="about__title">Certifications &amp; courses</h3>

          <ul className="about__list">
            {certifications.map((item) => (
              <li key={item.id} className="about__item">
                {item.title}
              </li>
            ))}
          </ul>

          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Asiel_Rosiles_CV.pdf"
            className="about__resume-button"
          >
            Download resume
          </a>
        </div>

        <img
          className="about__photo"
          src={AboutPhoto}
          alt="Magazine-style cover of Asiel Rosiles titled Build, from ideas to code"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;
