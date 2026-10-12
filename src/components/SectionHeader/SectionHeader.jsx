import './SectionHeader.styles.scss';

// Section title and optional subtitle, sized like the home "Selected projects"
// heading. `className` lets a page position the header in its own layout.
const SectionHeader = ({ id, title, subtitle, className }) => (
  <div className={`section-header${className ? ` ${className}` : ''}`}>
    <h2 id={id} className="section-header__title">
      {title}
    </h2>
    {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeader;
