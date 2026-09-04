import './About.styles.scss';
import AboutPhoto from '../../assets/images/landing-photo.webp';

const stackItems = [
  {
    id: 1,
    icon: 'JS',
    title: 'JavaScript & React',
    description: 'Building interactive, component-based UIs'
  },
  {
    id: 2,
    icon: '{ }',
    title: 'Redux',
    description: 'State management for growing applications'
  },
  {
    id: 3,
    icon: 'CSS',
    title: 'Sass / CSS3',
    description: 'Responsive, scalable styling systems'
  },
  {
    id: 4,
    icon: 'UX',
    title: 'UX / UI Design',
    description: 'Figma prototyping and design thinking'
  }
]

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__head">
          <span className="about__eyebrow">{'// about'}</span>
          <h2 className="about__title">From curiosity to code</h2>
          <p className="about__subtitle">
            No bootcamp, no formal degree — just consistent, self-directed learning and real projects shipped along the way.
          </p>
        </div>

        <div className='about__photo-description'>
        <img src={AboutPhoto} className='about__photo' alt='Asiel Rosiles'/>
        <div className='about__subcontainer'>
          <div className="about__grid">
            <div className="about__card">
              <h3 className="about__card-title">Who I am</h3>
              <p className="about__card-text">
                I'm a self-taught developer with a solid foundation in Web Design and UX/UI, currently focused on becoming a proficient React Developer. I care about interfaces that feel intentional — fast, accessible, and clean under the hood.
              </p>
              <div className="about__tags">
                <span className="about__tag">Self-Taught</span>
                <span className="about__tag">UX/UI Foundation</span>
                <span className="about__tag">React Focused</span>
              </div>
            </div>
          </div>
          <div className="about__stack">
            {stackItems.map((item) => (
              <div key={item.id} className="about__stack-item">
                <div className="about__stack-ic">{item.icon}</div>
                <div className="about__stack-meta">
                  <b>{item.title}</b>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}

export default About
