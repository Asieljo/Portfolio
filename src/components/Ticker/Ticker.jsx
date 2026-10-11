import './Ticker.styles.scss';

const tickerItems = [
  'Figma',
  'UX/UI Design',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'UI Components',
  'Interaction Design',
  'Accessibility',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Sass',
  'Git',
];

const Ticker = () => (
  <div className="ticker" aria-hidden="true">
    <div className="ticker__track">
      {[0, 1].map((copy) => (
        <div className="ticker__group" key={copy}>
          {tickerItems.map((item) => (
            <span className="ticker__item" key={item}>
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Ticker;
