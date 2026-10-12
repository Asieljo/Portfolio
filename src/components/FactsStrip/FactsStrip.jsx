import './FactsStrip.styles.scss';

// Inverted band of key facts (label + value), styled like the home ticker.
const FactsStrip = ({ facts }) => (
  <div className="facts-strip">
    <dl className="facts-strip__list">
      {facts.map((fact) => (
        <div key={fact.id} className="facts-strip__item">
          <dt className="facts-strip__label">{fact.label}</dt>
          <dd className="facts-strip__value">{fact.value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

export default FactsStrip;
