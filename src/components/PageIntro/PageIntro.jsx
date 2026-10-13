import { Link } from 'react-router-dom';
import './PageIntro.styles.scss';

// Opening of the project pages: back link, label, title, then the lead beside
// a short summary on desktop. `action` adds an external button under the
// summary; `media` renders below everything (e.g. a hero image).
const PageIntro = ({ label, title, lead, text, action, media }) => (
  <section className="page-intro">
    <div className="page-intro__container">
      <Link to="/" state={{ section: 'projects' }} className="page-intro__back">
        Back to projects
      </Link>

      <div className="page-intro__heading">
        <span className="page-intro__label">{label}</span>
        <h1 className="page-intro__title">{title}</h1>
      </div>

      <div className="page-intro__grid">
        <p className="page-intro__lead">{lead}</p>

        <div className="page-intro__body">
          <p className="page-intro__text">{text}</p>

          {action && (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="page-intro__action"
              aria-label={action.ariaLabel}
            >
              {action.label}
            </a>
          )}
        </div>
      </div>

      {media}
    </div>
  </section>
);

export default PageIntro;
