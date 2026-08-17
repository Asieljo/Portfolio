import './Languages.styles.scss'

const languagesData = [
  {
    id: 1,
    name: 'HTML5',
    level: 'Intermediate',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  },
  {
    id: 2,
    name: 'CSS3',
    level: 'Intermediate',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    id: 3,
    name: 'JavaScript',
    level: 'Basic',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    )
  }
]

const Languages = () => {
  return (
    <section className="languages" id="languages">
      <div className="languages__container">
        <span className="languages__label">Languages</span>
        <h2 className="languages__title">Programming Languages</h2>
        
        <div className="languages__grid">
          {languagesData.map((lang) => (
            <div key={lang.id} className="languages__card">
              <div className="languages__icon">
                {lang.icon}
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
