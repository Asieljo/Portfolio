import './SoftSkills.styles.scss'

const skillsData = [
  { id: 1, name: 'Leadership' },
  { id: 2, name: 'Collaboration' },
  { id: 3, name: 'Empathy' },
  { id: 4, name: 'Adaptability' },
  { id: 5, name: 'Creativity' },
  { id: 6, name: 'Fast Learning' }
]

const SoftSkills = () => {
  return (
    <section className="soft-skills" id="skills">
      <div className="soft-skills__container">
        <div className="soft-skills__grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="soft-skills__card">
              <span className="soft-skills__num">
                {String(skill.id).padStart(2, '0')}
              </span>
              <b className="soft-skills__name">{skill.name}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
