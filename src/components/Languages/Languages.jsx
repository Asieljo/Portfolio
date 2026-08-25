import './Languages.styles.scss'
import Html5Icon from '../../assets/images/icons/html-logo.webp';
import Css3Icon from '../../assets/images/icons/css-logo.webp';
import JavascriptIcon from '../../assets/images/icons/js-logo.png';
import ReactIcon from '../../assets/images/icons/react-logo.webp';
import SassIcon from '../../assets/images/icons/sass-logo.png';
import ReduxIcon from '../../assets/images/icons/redux-logo.png';

const languagesData = [
  {
    id: 1,
    name: 'HTML5',
    level: 'Intermediate',
    icon: Html5Icon 
  },
  {
    id: 2,
    name: 'CSS3',
    level: 'Intermediate',
    icon: Css3Icon 
  },
  {
    id: 3,
    name: 'JavaScript',
    level: 'Intermediate',
    icon: JavascriptIcon 
  },
  {
    id: 4,
    name: 'React',
    level: 'Intermediate',
    icon: ReactIcon 
  },
  {
    id: 5,
    name: 'Sass',
    level: 'Intermediate',
    icon: SassIcon
  },
  {
    id: 6,
    name: 'Redux',
    level: 'Basic',
    icon: ReduxIcon
  }
]

const Languages = () => {
  return (
    <section className="languages" id="languages">
      <div className="languages__container">
        <span className="languages__label">Languages</span>
        <h2 className="languages__title">Languages & Libraries</h2>
        
        <div className="languages__grid">
          {languagesData.map((lang) => (
            <div key={lang.id} className="languages__card">
              <div className="languages__icon">
                <img src={lang.icon} alt={`${lang.name} logo`} />
              </div>
              <h3 className="languages__name">{lang.name}</h3>
              <span className="languages__level">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
