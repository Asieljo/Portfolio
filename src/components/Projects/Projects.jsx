import { Link } from 'react-router-dom';
import './Projects.styles.scss';
import SatechImage from '../../assets/images/screenshots/screenshot-satech.jpg';
import CaseStudyImage from '../../assets/images/screenshots/screenshot-case-study.jpg';
import PortfolioImage from '../../assets/images/screenshots/screenshot-portfolio.jpg';
import EcommerceImage from '../../assets/images/screenshots/screenshot-ecommerce.jpg';

const projects = [
  {
    id: 1,
    title: 'Work experience at Satech',
    description:
      'All my work UX/UI related at SATECH, including landing pages, multiple interfaces and electronic firms.',
    tags: ['UX/UI', 'Figma', 'Variety of Projects'],
    type: 'Live',
    linkType: 'external',
    live: 'https://www.behance.net/asielrosiles',
    image: SatechImage,
  },
  {
    id: 2,
    title: 'UX Case Study — Digital Catalog',
    description:
      'End-to-end UX process: research, wireframes, and a working prototype for a product catalog.',
    tags: ['Figma', 'UX Research', 'Prototyping'],
    type: 'Case study',
    linkType: 'internal',
    route: '/case-study',
    image: CaseStudyImage,
  },
  {
    id: 3,
    title: 'Portfolio with design system',
    description:
      'A hand-built responsive site focused on clean structure, tokens and modern CSS layout techniques.',
    tags: ['HTML5', 'CSS3', 'Responsive'],
    type: 'Live',
    linkType: 'external',
    live: 'https://asieljo.github.io/website_prueba/',
    image: PortfolioImage,
  },
  {
    id: 4,
    title: 'E-commerce with Google Services',
    description:
      'A minimalist and simple e-commerce with multiple Google Services, Redux state and more.',
    tags: ['Firestore', 'Authentication', 'React & Redux'],
    type: 'Live',
    linkType: 'external',
    live: 'https://clothing-shop-app.vercel.app/',
    image: EcommerceImage,
  },
];

const CardContent = ({ project }) => (
  <>
    <div className="projects__body">
      <span className="projects__type">{project.type}</span>
      <h3 className="projects__title">{project.title}</h3>
      <p className="projects__description">{project.description}</p>
      <ul className="projects__tags">
        {project.tags.map((tag) => (
          <li key={tag} className="projects__tag">
            {tag}
          </li>
        ))}
      </ul>
      <span className="projects__cta">View projects</span>
    </div>

    <div className="projects__media">
      <img
        className="projects__image"
        src={project.image}
        alt={project.title}
      />
    </div>
  </>
);

const Projects = () => (
  <section className="projects" id="projects">
    <div className="projects__container">
      <div className="projects__head">
        <h2 className="projects__title-lead">Selected projects</h2>
        <p className="projects__subtitle">
          A mix of live sites, case study and prototypes from my ongoing
          practice.
        </p>
      </div>

      <div className="projects__list">
        {projects.map((project) =>
          project.linkType === 'internal' ? (
            <Link
              key={project.id}
              to={project.route}
              className="projects__card"
            >
              <CardContent project={project} />
            </Link>
          ) : (
            <a
              key={project.id}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__card"
            >
              <CardContent project={project} />
            </a>
          )
        )}
      </div>
    </div>
  </section>
);

export default Projects;
