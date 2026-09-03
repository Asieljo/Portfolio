import { Link } from 'react-router-dom'
import screenshot1 from '../../assets/images/screenshots/screenshot1.jpg'
import screenshot2 from '../../assets/images/screenshots/screenshot2.jpg'
import screenshot3 from '../../assets/images/screenshots/screenshot3.jpg'
import screenshot4 from '../../assets/images/screenshots/screenshot4.jpg'
import './Projects.styles.scss'

const projects = [
  {
    id: 1,
    title: 'Web Design with HTML & CSS',
    image: screenshot1,
    github: 'https://github.com/Asieljo/website_prueba',
    live: 'https://asieljo.github.io/website_prueba/',
    type: 'external'
  },
  {
    id: 2,
    title: 'Case Study',
    image: screenshot2,
    route: '/case-study',
    type: 'internal'
  },
  {
    id: 3,
    title: 'Responsive Design with CSS',
    image: screenshot3,
    github: 'https://github.com/Asieljo/Responsive_web_design',
    live: 'https://asieljo.github.io/Responsive_web_design/',
    type: 'external'
  },
  {
    id: 4,
    title: 'Figma Prototyping',
    image: screenshot4,
    route: '/prototype',
    type: 'internal'
  }
]

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <span className="projects__label">Projects</span>
        <h2 className="projects__title">Featured Work</h2>
        
        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="projects__card">
              {project.type === 'internal' ? (
                <Link to={project.route} className="projects__card-link" aria-label={`View ${project.title}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="projects__image"
                  />
                </Link>
              ) : (
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__card-link"
                  aria-label={`Open ${project.title}`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="projects__image"
                  />
                </a>
              )}
              <div className="projects__card-content">
                {project.type === 'internal' ? (
                  <h3>
                    <Link to={project.route} className="projects__card-title">
                      {project.title}
                    </Link>
                  </h3>
                ) : (
                  <h3>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-title"
                    >
                      {project.title}
                    </a>
                  </h3>
                )}
                <div className="projects__card-actions">
                  {project.type === 'external' ? (
                    <>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="projects__link"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                      </a>
                    </>
                  ) : (
                    <Link to={project.route} className="projects__link projects__link--view">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      View Project
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
