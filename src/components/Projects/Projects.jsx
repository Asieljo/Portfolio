import { Link } from 'react-router-dom';
import './Projects.styles.scss';
import SatechImage from '../../assets/images/screenshots/screenshot-satech.jpg';
import CaseStudyImage from '../../assets/images/screenshots/screenshot-case-study.jpg';
import PortfolioImage from '../../assets/images/screenshots/screenshot-portfolio.jpg';
import EcommerceImage from '../../assets/images/screenshots/screenshot-ecommerce.jpg';

// `variant: 'outline'` renders the secondary action of a card (GitHub).
// `titlePrefix` is dropped on desktop, where the mockups keep the title on one
// line; `imagePosition` anchors screenshots whose subject is not centered.
const projects = [
  {
    id: 1,
    title: 'Work experience at SATECH',
    description:
      'All my work UX/UI related at SATECH, including landing pages, multiple interfaces and electronic firms.',
    tags: ['UX/UI', 'Figma', 'Variety of Projects'],
    type: 'Live',
    image: SatechImage,
    actions: [
      { label: 'View projects', href: 'https://www.behance.net/asielrosiles' },
    ],
  },
  {
    id: 2,
    titlePrefix: 'UX',
    title: 'Case Study: Digital Catalog',
    description:
      'End-to-end UX process: from research to working prototypes for a product digital catalog.',
    tags: ['Real client', 'Wireframing', 'Prototyping'],
    type: 'Live',
    image: CaseStudyImage,
    actions: [{ label: 'View project', to: '/case-study' }],
  },
  {
    id: 3,
    title: 'Portfolio with design system',
    description:
      'Redesign of personal portfolio, enhancing visual design and distribution of elements.',
    tags: ['Design System', 'Responsive Design', 'Development'],
    type: 'Live',
    image: PortfolioImage,
    actions: [
      { label: 'GitHub', href: 'https://github.com/Asieljo/Portfolio', variant: 'outline' },
      { label: 'View project', href: 'https://asieljo.github.io/Portfolio/' },
    ],
  },
  {
    id: 4,
    title: 'E-commerce with Google Services',
    description:
      'A minimalist and simple e-commerce with multiple Google Services, Redux and more.',
    tags: ['Firestore', 'Authentication', 'React & Redux'],
    type: 'Live',
    image: EcommerceImage,
    imagePosition: 'top-left',
    actions: [
      { label: 'GitHub', href: 'https://github.com/Asieljo/clothing-shop-vite', variant: 'outline' },
      { label: 'Live demo', href: 'https://clothing-shop-app.vercel.app/' },
    ],
  },
];

const ProjectAction = ({ action }) => {
  const className = `projects__button projects__button--${action.variant ?? 'solid'}`;

  if (action.to) {
    return (
      <Link to={action.to} className={className}>
        {action.label}
      </Link>
    );
  }

  return (
    <a href={action.href} target="_blank" rel="noopener noreferrer" className={className}>
      {action.label}
    </a>
  );
};

const Projects = () => (
  <section className="projects" id="projects">
    <div className="projects__container">
      <h2 className="projects__heading">Selected projects</h2>
      <p className="projects__subtitle">
        A mix of live sites, case study and prototypes from my ongoing practice.
      </p>

      <div className="projects__list">
        {projects.map((project) => (
          <article key={project.id} className="projects__card">
            <div className="projects__body">
              <span className="projects__type">{project.type}</span>
              <h3 className="projects__title">
                {project.titlePrefix && (
                  <span className="projects__title-prefix">{project.titlePrefix} </span>
                )}
                {project.title}
              </h3>
              <p className="projects__description">{project.description}</p>
              <ul className="projects__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="projects__tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="projects__actions">
                {project.actions.map((action) => (
                  <ProjectAction key={action.label} action={action} />
                ))}
              </div>
            </div>

            <div className="projects__media">
              <img
                className={`projects__image${project.imagePosition ? ` projects__image--${project.imagePosition}` : ''}`}
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
