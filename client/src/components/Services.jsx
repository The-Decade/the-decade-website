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
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>What We Offer</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Our Services</h2>
        <div className="accent-bar" />

        <div className="services__grid">
          {services.map((s, i) => (
            <div className="card services__card" key={i}>
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