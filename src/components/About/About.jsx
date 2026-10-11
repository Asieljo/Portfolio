import './About.styles.scss';
import AboutPhoto from '../../assets/images/about-photo.jpg';
import cvUrl from '../../../Asiel_Rosiles_CV.pdf';

const aboutTags = ['Self-taught', 'UX/UI foundation', 'React focused'];

const certifications = [
  {
    id: 1,
    title: 'Certification of User Experience Designer',
    issuer: 'Fundación Carlos Slim',
    year: '2024',
  },
  {
    id: 2,
    title: 'Complete Web & Mobile Designer: UI/UX, Figma and more',
    issuer: 'Udemy',
    year: '2024',
  },
  {
    id: 3,
    title: 'Constant education in HTML5, CSS3 & JavaScript',
    issuer: 'Self-directed',
    year: 'Ongoing',
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h1 className="about__hero-title">
            <span className="about__hero-line">Builder.</span>
            <span className="about__hero-line">Designer.</span>
            <span className="about__hero-line">Curious mind.</span>
          </h1>

          <h2 className="about__title">About me</h2>

          <div className="about__copy">
            <p className="about__lead">
              UX/UI designer with strong development skills. I design with the code in mind and build consequently, from tokens and reusable components to responsive layouts, so teams get a smoother handoff and users get an interface that works exactly as intended.
            </p>

            <p className="about__note">
              No bootcamp, no formal academic degrees — my background is built on consistent self-directed learning, courses, certifications and real projects shipped along the way.
            </p>
          </div>

          <ul className="about__tags">
            {aboutTags.map((tag) => (
              <li key={tag} className="about__tag">
                {tag}
              </li>
            ))}
          </ul>

          <div className="about__certifications">
            <h3 className="about__subtitle">Certifications &amp; courses</h3>

            <ul className="about__list">
              {certifications.map((item) => (
                <li key={item.id} className="about__item">
                  <span className="about__item-index">
                    {String(item.id).padStart(2, '0')}
                  </span>
                  <div className="about__item-body">
                    <span className="about__item-title">{item.title}</span>
                    <span className="about__item-meta">
                      {item.issuer} &middot; {item.year}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Asiel_Rosiles_CV.pdf"
              className="about__resume-btn"
            >
              Download resume
            </a>
          </div>
        </div>

        <div className="about__media">
          <img
            className="about__photo"
            src={AboutPhoto}
            alt="Asiel Rosiles"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
