import './WhyUs.css'

const reasons = [
  {
    title: 'Creative Excellence',
    desc: 'We combine art and technology to produce visually stunning and functional designs.',
  },
  {
    title: 'Experienced Professionals',
    desc: 'Our team brings years of industry expertise, ensuring every project meets the highest standards.',
  },
  {
    title: 'Tailored Solutions',
    desc: 'Every client is unique, and so are our designs. We adapt to your vision and goals.',
  },
  {
    title: 'Innovative Approach',
    desc: "We're always exploring the latest trends and tools to keep our work fresh and relevant.",
  },
]

function WhyUs() {
  return (
    <section className="section whyus" id="about">
      <div className="container">
        <div className="whyus__inner">
          <div className="whyus__left">
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">The Decade<br />Difference</h2>
            <p className="section-subtitle">
              We're not just a service provider — we're your growth partner,
              committed to delivering results that matter.
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '32px' }}>
              Work With Us
            </a>
          </div>

          <div className="whyus__grid">
            {reasons.map((r, i) => (
              <div className="whyus__card" key={i}>
                <div className="whyus__number">0{i + 1}</div>
                <h3 className="whyus__card-title">{r.title}</h3>
                <p className="whyus__card-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs