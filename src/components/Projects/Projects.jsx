import { Link } from 'react-router-dom'
import './Projects.styles.scss'

const projects = [
  {
    id: 1,
    title: 'Web Design with HTML & CSS',
    description: 'A hand-built responsive site focused on clean structure and modern CSS layout techniques.',
    tags: ['HTML5', 'CSS3', 'Responsive'],
    type: 'LIVE',
    github: 'https://github.com/Asieljo/website_prueba',
    live: 'https://asieljo.github.io/website_prueba/',
    linkType: 'external'
  },
  {
    id: 2,
    title: 'UX Case Study — Digital Catalog',
    description: 'End-to-end UX process: research, wireframes, and a working prototype for a product catalog.',
    tags: ['Figma', 'UX Research', 'Prototyping'],
    type: 'CASE STUDY',
    route: '/case-study',
    linkType: 'internal'
  },
  {
    id: 3,
    title: 'Responsive Design with CSS',
    description: 'A layout system built to adapt cleanly across breakpoints using modern CSS.',
    tags: ['CSS Grid', 'Flexbox', 'Mobile-First'],
    type: 'LIVE',
    github: 'https://github.com/Asieljo/Responsive_web_design',
    live: 'https://asieljo.github.io/Responsive_web_design/',
    linkType: 'external'
  },
  {
    id: 4,
    title: 'Figma Prototyping',
    description: 'An interactive prototype exploring flow and interaction states before implementation.',
    tags: ['Figma', 'Interaction Design'],
    type: 'PROTOTYPE',
    route: '/prototype',
    linkType: 'internal'
  }
]

const Projects = () => {
  const renderCard = (project) => {
    const cardContent = (
      <>
        <div className="projects__glow"></div>
        <div className="projects__card-top">
          <span className="projects__type">{project.type}</span>
          <span className="projects__arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
        <h3 className="projects__card-title">{project.title}</h3>
        <p className="projects__card-desc">{project.description}</p>
        <div className="projects__tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="projects__tag">{tag}</span>
          ))}
        </div>
        <div className="projects__card-actions">
          {project.linkType === 'external' ? (
            <>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo
              </a>
            </>
          ) : (
            <Link to={project.route} className="projects__link projects__link--primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              View Project
            </Link>
          )}
        </div>
      </>
    )

    if (project.linkType === 'internal') {
      return (
        <Link to={project.route} className="projects__card">
          {cardContent}
        </Link>
      )
    }

    return (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="projects__card"
      >
        {cardContent}
      </a>
    )
  }

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__head">
          <span className="projects__eyebrow">{'// selected work'}</span>
          <h2 className="projects__title">Featured Projects</h2>
          <p className="projects__subtitle">
            A mix of live sites, case studies and prototypes from my ongoing practice.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="projects__item">
              {renderCard(project)}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
