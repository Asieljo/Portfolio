import { Link } from 'react-router-dom'
import './CaseStudy.styles.scss'

const CaseStudy = () => {
  return (
    <div className="case-study">
      <div className="case-study__header">
        <Link to="/" className="case-study__back">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Portfolio
        </Link>
        <h1 className="case-study__title">UX Case Study</h1>
      </div>

      <div className="case-study__content">
        <section className="case-study__section">
          <h2>1. Meeting the Client</h2>
          <p>Understanding the client's needs and requirements for the project.</p>
        </section>

        <section className="case-study__section">
          <h2>2. User Segmentation</h2>
          <p>Identifying and analyzing the target user groups.</p>
        </section>

        <section className="case-study__section">
          <h2>3. Sketching</h2>
          <p>Initial ideation and concept development through sketches.</p>
        </section>

        <section className="case-study__section">
          <h2>4. User Flow & Sitemap</h2>
          <p>Creating the information architecture and user navigation flow.</p>
          <div className="case-study__images">
            <img src="/src/assets/images/userflow.png" alt="User Flow" />
            <img src="/src/assets/images/sitemap.png" alt="Sitemap" />
          </div>
        </section>

        <section className="case-study__section">
          <h2>5. Wireframing & Prototyping</h2>
          <p>Developing wireframes and interactive prototypes.</p>
          <div className="case-study__images">
            <img src="/src/assets/images/mockups/Mockup_1.png" alt="Mockup 1" />
            <img src="/src/assets/images/mockups/Mockup_2.png" alt="Mockup 2" />
            <img src="/src/assets/images/mockups/Mockup_3.png" alt="Mockup 3" />
            <img src="/src/assets/images/mockups/Mockup_4.png" alt="Mockup 4" />
          </div>
        </section>

        <section className="case-study__section">
          <h2>6. Stuck Project</h2>
          <p>Challenges faced and how they were overcome during the project.</p>
        </section>
      </div>
    </div>
  )
}

export default CaseStudy
