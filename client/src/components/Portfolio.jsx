import './Portfolio.css'

const projects = [
  {
    category: 'Web Development',
    title: 'Zimbabwe Parks & Wildlife',
    desc: 'Full website design and development for a national authority.',
    tag: 'Web Dev',
  },
  {
    category: 'Graphic Design',
    title: 'Brand Identity Package',
    desc: 'Complete branding — polo shirts, mugs, tote bags, and business cards.',
    tag: 'Design',
  },
  {
    category: 'Digital Marketing',
    title: 'Social Media Growth',
    desc: 'Content creation and social media management driving real audience growth.',
    tag: 'Marketing',
  },
]

const clients = ['Kirkman Hybrid Centre', 'Juphimo Consultancy', 'Mila Land Rover']

function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Our Work</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Portfolio Highlights</h2>
        <div className="accent-bar" />

        <div className="portfolio__grid">
          {projects.map((p, i) => (
            <div className="portfolio__card card" key={i}>
              <div className="portfolio__card-visual" />
              <div className="portfolio__card-body">
                <span className="portfolio__tag">{p.tag}</span>
                <h3 className="portfolio__card-title">{p.title}</h3>
                <p className="portfolio__card-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio__clients">
          <p className="portfolio__clients-label">Brands We've Worked With</p>
          <div className="portfolio__clients-list">
            {clients.map(c => (
              <div className="portfolio__client-chip" key={c}>{c}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio