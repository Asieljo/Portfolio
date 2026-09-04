import './Landing.styles.scss';

const Landing = ({ onContactClick }) => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="landing">
      <div className="hero__container">
        <div className="hero__grid">
          <div className="hero__content">
            <span className="hero__badge">
              <span className="hero__pulse"></span>
              Available for opportunities
            </span>
            <h1 className="hero__title">
              Front-end developer building <span className="hero__grad">clean, functional</span> interfaces.
            </h1>
            <p className="hero__lead">
              Self-taught React developer with a UX/UI foundation. I turn ideas into responsive, thoughtfully-built products — one component at a time.
            </p>
            <div className="hero__actions">
              <button className="hero__btn hero__btn--primary" onClick={scrollToProjects}>
                View Projects
              </button>
              <button className="hero__btn hero__btn--ghost" onClick={onContactClick}>
                Get in touch
              </button>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <b>04</b>
                <span>PROJECTS_SHIPPED</span>
              </div>
              <div className="hero__stat">
                <b>02+</b>
                <span>YEARS_LEARNING</span>
              </div>
              <div className="hero__stat">
                <b>React</b>
                <span>CURRENT_FOCUS</span>
              </div>
            </div>
          </div>

          <div className="hero__terminal">
            <div className="hero__terminal-bar">
              <span className="hero__terminal-dot hero__terminal-dot--red"></span>
              <span className="hero__terminal-dot hero__terminal-dot--yellow"></span>
              <span className="hero__terminal-dot hero__terminal-dot--green"></span>
              <span className="hero__terminal-fname">developer.js</span>
            </div>
            <div className="hero__terminal-body">
              <div><span className="hero__c1">const</span> developer <span className="hero__c4">=</span> {'{'}</div>
              <div className="hero__indent"><span className="hero__c2">name</span>: <span className="hero__c3">'Asiel Rosiles'</span>,</div>
              <div className="hero__indent"><span className="hero__c2">role</span>: <span className="hero__c3">'React Developer'</span>,</div>
              <div className="hero__indent"><span className="hero__c2">stack</span>: [<span className="hero__c3">'React'</span>, <span className="hero__c3">'Redux'</span>, <span className="hero__c3">'Sass'</span>],</div>
              <div className="hero__indent"><span className="hero__c2">learning</span>: <span className="hero__c1">true</span>,</div>
              <div className="hero__indent"><span className="hero__c2">available</span>: <span className="hero__c1">true</span></div>
              <div>{'}'}<span className="hero__caret"></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
