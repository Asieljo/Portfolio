import { Link } from 'react-router-dom'
import './Prototype.styles.scss'

const Prototype = () => {
  return (
    <div className="prototype">
      <div className="prototype__header">
        <Link to="/" className="prototype__back">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Portfolio
        </Link>
        <h1 className="prototype__title">Figma Prototyping</h1>
      </div>

      <div className="prototype__content">
        <div className="prototype__frame-container">
          <iframe
            className="prototype__frame"
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
            src="https://embed.figma.com/proto/MpXXvyEhDct0PLrdgaq2LW/App-de-im%C3%A1genes?node-id=251-1933&viewport=-5981%2C349%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=251%3A2215&show-proto-sidebar=1&page-id=0%3A1&embed-host=share"
            allowFullScreen
            title="Interactive Figma prototype"
          />
        </div>

        <div className="prototype__description">
          <h2>Project Overview</h2>
          <p>
            This project showcases my skills in Figma prototyping, creating interactive 
            and user-friendly interfaces. The prototype demonstrates a complete user flow 
            with attention to detail in both visual design and user experience.
          </p>
          
          <div className="prototype__features">
            <h3>Key Features</h3>
            <ul>
              <li>Interactive prototype with user flow</li>
              <li>Responsive design considerations</li>
              <li>Consistent design system</li>
              <li>User-centered approach</li>
            </ul>
          </div>

          <div className="prototype__tools">
            <h3>Tools Used</h3>
            <div className="prototype__tool-tags">
              <span>Figma</span>
              <span>UI/UX Design</span>
              <span>Prototyping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prototype
