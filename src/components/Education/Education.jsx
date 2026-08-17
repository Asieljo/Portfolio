import './Education.styles.scss'

const educationData = [
  {
    id: 1,
    title: 'Certification of User Experience Designer',
    year: '2024'
  },
  {
    id: 2,
    title: 'Certification of Complete Web & Mobile Designer: UI/UX, Figma and more',
    year: '2024'
  },
  {
    id: 3,
    title: 'Constant Education in HTML5, CSS3 and JavaScript',
    year: 'Ongoing'
  }
]

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education__container">
        <span className="education__label">Education</span>
        <h2 className="education__title">Academic Background</h2>
        
        <div className="education__grid">
          {educationData.map((item) => (
            <div key={item.id} className="education__card">
              <div className="education__card-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/>
                </svg>
                <span className="education__year">{item.year}</span>
              </div>
              <h3 className="education__card-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
