import './Education.styles.scss'

const educationData = [
  {
    id: 1,
    title: 'Certification of User Experience Designer',
    year: '2024'
  },
  {
    id: 2,
    title: 'Complete Web & Mobile Designer: UI/UX, Figma and more',
    year: '2024'
  },
  {
    id: 3,
    title: 'Constant Education in HTML5, CSS3 & JavaScript',
    year: 'Ongoing'
  }
]

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education__container">
        <div className="education__head">
          <span className="education__eyebrow">{'// education'}</span>
          <h2 className="education__title">Certifications & Courses</h2>
        </div>

        <div className="education__timeline">
          {educationData.map((item, index) => (
            <div key={item.id} className="education__item">
              <div className="education__dot">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="education__body">
                <h4 className="education__card-title">{item.title}</h4>
                <span className="education__year">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
