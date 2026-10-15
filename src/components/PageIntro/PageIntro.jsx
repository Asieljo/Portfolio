import { Link } from 'react-router-dom';
import './PageIntro.styles.scss';

/**
 * Opening of the project pages: a "Back to projects" link, the page title
 * (`h1`), then the lead beside a short summary on desktop.
 *
 * `action` adds an external button under the summary that opens in a new tab;
 * `media` renders below everything (e.g. a hero image).
 */
const PageIntro = ({ title, lead, text, action, media }) => (
  <section className="page-intro">
    <div className="page-intro__container">
      <Link to="/" state={{ section: 'projects' }} className="page-intro__back">
        Back to projects
      </Link>

      <h1 className="page-intro__title">{title}</h1>

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
