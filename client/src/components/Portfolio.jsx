import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Portfolio.css'

const projects = [
  {
    title: 'Digital Storefront',
    desc: 'Full website design and development for a modern digital storefront.',
    tag: 'Web Dev',
    image: '/images/webdev.png',
    previewHeight: '180px',
    objectPosition: 'center top',
    objectFit: 'cover',
  },
  {
    title: 'Brand Identity Package',
    desc: 'Complete branding — polo shirts, mugs, tote bags, and business cards.',
    tag: 'Design',
    image: '/images/graphicdesign.jpeg',
    previewHeight: '260px',
    objectPosition: 'center center',
    objectFit: 'cover',
  },
  {
    title: 'Social Media Growth',
    desc: 'Content creation and social media management driving real audience growth.',
    tag: 'Marketing',
    image: '/images/digitalmarketing.png',
    previewHeight: '320px',
    objectPosition: 'center top',
    objectFit: 'contain',
  },
]

const clients = [
  { name: 'Kirkman Hybrid Centre', logo: '/images/kirkmanhybridcentre.jpeg' },
  {
    name: 'Juphimo Consultancy',
    logo: '/images/juphimo.jpeg',
    url: 'https://www.juphimorecruitment.co.zw/',
  },
  { name: 'Mila Land Rover', logo: '/images/mila.jpeg' },
]

function Portfolio() {
  const heading = useScrollAnimation()
  const grid = useScrollAnimation()
  const clientsAnim = useScrollAnimation()

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div ref={heading.ref}>
          <p className={`section-label fade-up ${heading.visible ? 'visible' : ''}`}
            style={{ textAlign: 'center', color: '#7c3aed' }}>Our Work</p>
          <h2 className={`section-title fade-up delay-1 ${heading.visible ? 'visible' : ''}`}
            style={{ textAlign: 'center', color: '#111111' }}>Portfolio Highlights</h2>
          <div className={`accent-bar fade-up delay-2 ${heading.visible ? 'visible' : ''}`} />
        </div>

        <div className="portfolio__grid" ref={grid.ref}>
          {projects.map((p, i) => (
            <div
              className={`portfolio__card fade-up ${grid.visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
              key={i}
            >
              <div
  className="portfolio__card-visual"
  style={{ height: p.previewHeight }}
>
  <img
    src={p.image}
    alt={p.title}
    style={{
      objectPosition: p.objectPosition,
      objectFit: p.objectFit,
    }}
  />
</div>
              <div className="portfolio__card-body">
                <span className="portfolio__tag">{p.tag}</span>
                <h3 className="portfolio__card-title" style={{ color: '#111111' }}>{p.title}</h3>
                <p className="portfolio__card-desc" style={{ color: '#555555' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`portfolio__clients fade-up ${clientsAnim.visible ? 'visible' : ''}`}
  ref={clientsAnim.ref}>
  <p className="portfolio__clients-label" style={{ color: '#888888' }}>
    Brands We've Worked With
  </p>
  <div className="portfolio__clients-list">
    {clients.map((c, i) => {
      const chipClass = `portfolio__client-chip fade-up ${clientsAnim.visible ? 'visible' : ''}`
      const chipStyle = { transitionDelay: `${i * 0.1}s` }

      if (c.url) {
        return (
          <a
            className={chipClass}
            style={chipStyle}
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit ${c.name}`}
            aria-label={`Visit ${c.name} website`}
          >
            <img src={c.logo} alt={c.name} />
          </a>
        )
      }

      return (
        <div
          className={chipClass}
          style={chipStyle}
          key={c.name}
        >
          <img src={c.logo} alt={c.name} />
        </div>
      )
    })}
  </div>
</div>
      </div>
    </section>
  )
}

export default Portfolio