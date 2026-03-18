import './Team.css'

const team = [
  { name: 'Team Member', role: 'Creative Director', initials: 'TD' },
  { name: 'Team Member', role: 'Digital Marketer', initials: 'TD' },
  { name: 'Team Member', role: 'Web Developer', initials: 'TD' },
  { name: 'Team Member', role: 'Brand Strategist', initials: 'TD' },
]

function Team() {
  return (
    <section className="section whyus" id="team">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>The People</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Meet the Minds Behind<br />the Creativity
        </h2>
        <div className="accent-bar" />
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 56px' }}>
          Our team's synergy is the key to bringing your ideas to life.
        </p>

        <div className="team__grid">
          {team.map((m, i) => (
            <div className="team__card card" key={i}>
              <div className="team__avatar">
                <span>{m.initials}</span>
              </div>
              <h3 className="team__name">{m.name}</h3>
              <p className="team__role">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team