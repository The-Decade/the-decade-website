import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Services.css'

const services = [
  {
    icon: '🎨',
    title: 'Graphic Design',
    desc: 'Marketing materials, social media graphics, business cards, packaging design, and company profiles.',
    items: ['Marketing Materials', 'Social Media Graphics', 'Business Cards', 'Packaging Design'],
  },
  {
    icon: '📱',
    title: 'Digital Marketing',
    desc: 'SEO, paid advertising, email campaigns, and landing page optimization to grow your audience.',
    items: ['SEO Optimization', 'Google & Social Ads', 'Email Campaigns', 'Landing Pages'],
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'E-commerce sites, UI/UX integration, website maintenance, and performance optimization.',
    items: ['E-commerce Development', 'UI/UX Integration', 'Website Maintenance', 'Speed Optimization'],
  },
  {
    icon: '🌐',
    title: 'Hosting Services',
    desc: 'Domain registration, secure web hosting, email hosting, SSL certificates, and 24/7 support.',
    items: ['Domain Registration', 'Secure Web Hosting', 'SSL Certificates', '24/7 Support'],
  },
]

function Services() {
  const heading = useScrollAnimation()
  const grid = useScrollAnimation()

  return (
    <section className="section" id="services">
      <div className="container">
        <div ref={heading.ref}>
          <p className={`section-label fade-up ${heading.visible ? 'visible' : ''}`}
            style={{ textAlign: 'center' }}>What We Offer</p>
          <h2 className={`section-title fade-up delay-1 ${heading.visible ? 'visible' : ''}`}
            style={{ textAlign: 'center' }}>Our Services</h2>
          <div className={`accent-bar fade-up delay-2 ${heading.visible ? 'visible' : ''}`} />
        </div>

        <div className="services__grid" ref={grid.ref}>
          {services.map((s, i) => (
            <div
              className={`card services__card fade-up ${grid.visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              key={i}
            >
              <div className="services__icon">{s.icon}</div>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-desc">{s.desc}</p>
              <ul className="services__list">
                {s.items.map(item => (
                  <li key={item}>
                    <span className="services__bullet" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services