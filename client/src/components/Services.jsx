import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Services.css'

const services = [
  {
    icon: '🎨',
    title: 'Graphic Design',
    desc: 'Marketing materials, social media graphics, business cards, packaging design, and company profiles.',
    items: ['Marketing Materials', 'Social Media Graphics', 'Business Cards', 'Packaging Design'],
    accent: '#7c3aed',
    bg: '#f5f3ff',
    iconBg: '#ede9fe',
  },
  {
    icon: '📱',
    title: 'Digital Marketing',
    desc: 'SEO, paid advertising, email campaigns, and landing page optimization to grow your audience.',
    items: ['SEO Optimization', 'Google & Social Ads', 'Email Campaigns', 'Landing Pages'],
    accent: '#0891b2',
    bg: '#ecfeff',
    iconBg: '#cffafe',
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'E-commerce sites, UI/UX integration, website maintenance, and performance optimization.',
    items: ['E-commerce Development', 'UI/UX Integration', 'Website Maintenance', 'Speed Optimization'],
    accent: '#059669',
    bg: '#ecfdf5',
    iconBg: '#d1fae5',
  },
  {
    icon: '🌐',
    title: 'Hosting Services',
    desc: 'Domain registration, secure web hosting, email hosting, SSL certificates, and 24/7 support.',
    items: ['Domain Registration', 'Secure Web Hosting', 'SSL Certificates', '24/7 Support'],
    accent: '#d97706',
    bg: '#fffbeb',
    iconBg: '#fef3c7',
  },
]

function Services() {
  const heading = useScrollAnimation()
  const grid = useScrollAnimation()

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div ref={heading.ref}>
          <p className={`section-label fade-up ${heading.visible ? 'visible' : ''}`}
            style={{ textAlign: 'center', color: '#7c3aed' }}>What We Offer</p>
          <h2 className={`section-title fade-up delay-1 ${heading.visible ? 'visible' : ''}`}
            style={{ textAlign: 'center', color: '#111111' }}>Our Services</h2>
          <div className={`accent-bar fade-up delay-2 ${heading.visible ? 'visible' : ''}`} />
        </div>

        <div className="services__grid" ref={grid.ref}>
          {services.map((s, i) => (
            <div
              className={`services__card fade-up ${grid.visible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: s.bg,
                borderTop: `4px solid ${s.accent}`,
              }}
              key={i}
            >
              <div className="services__icon" style={{ background: s.iconBg }}>
                {s.icon}
              </div>
              <h3 className="services__card-title" style={{ color: '#111111' }}>{s.title}</h3>
              <p className="services__card-desc" style={{ color: '#555555' }}>{s.desc}</p>
              <ul className="services__list">
                {s.items.map(item => (
                  <li key={item} style={{ color: '#444444' }}>
                    <span className="services__bullet" style={{ background: s.accent }} />
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