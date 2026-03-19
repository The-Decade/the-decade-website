import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Team.css'

const team = [
  
  {
    
    role: 'Brand & Strategy Manager',
    image: '/images/manager.jpeg',
  },
  
  {
   
    role: 'Digital Marketer',
    image: '/images/precious.jpeg',
  },
  
  {
    
    role: 'Creative Designer',
    image: '/images/kev.jpeg',
  },
  {
    
    role: 'Software Developer',
    image: '/images/takura.jpg',
  },
]

function Team() {
  const heading = useScrollAnimation()
  const grid = useScrollAnimation()

  return (
    <section className="section whyus" id="team">
      <div className="container">
        <div ref={heading.ref}>
          <p className={`section-label fade-up ${heading.visible ? 'visible' : ''}`}
            style={{ textAlign: 'center' }}>The People</p>
          <h2 className={`section-title fade-up delay-1 ${heading.visible ? 'visible' : ''}`}
            style={{ textAlign: 'center' }}>
            Meet the Minds Behind<br />the Creativity
          </h2>
          <div className={`accent-bar fade-up delay-2 ${heading.visible ? 'visible' : ''}`} />
          <p className={`section-subtitle fade-up delay-3 ${heading.visible ? 'visible' : ''}`}
            style={{ textAlign: 'center', margin: '0 auto 56px' }}>
            Our team's synergy is the key to bringing your ideas to life.
          </p>
        </div>

        <div className="team__grid" ref={grid.ref}>
          {team.map((m, i) => (
            <div
              className={`team__card card fade-up ${grid.visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              key={i}
            >
              <div className="team__avatar">
                <img src={m.image} alt={m.name} />
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