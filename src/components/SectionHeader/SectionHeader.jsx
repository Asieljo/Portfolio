import './SectionHeader.styles.scss';

/**
 * Section title (`h2`) with an optional subtitle, sized like the home
 * "Selected projects" heading. Used across the project pages.
 *
 * Pass `id` so the section can point `aria-labelledby` at the title, and
 * `className` to position the header in the page's own layout.
 */
const SectionHeader = ({ id, title, subtitle, className }) => (
  <div className={`section-header${className ? ` ${className}` : ''}`}>
    <h2 id={id} className="section-header__title">
      {title}
    </h2>
    {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeader;
