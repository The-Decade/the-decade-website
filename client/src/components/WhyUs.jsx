import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './WhyUs.css'

const reasons = [
  {
    title: 'Creative Excellence',
    desc: 'We combine art and technology to produce visually stunning and functional designs.',
    accent: '#7c3aed',
    bg: 'rgba(124, 58, 237, 0.08)',
    numColor: '#7c3aed',
  },
  {
    title: 'Experienced Professionals',
    desc: 'Our team brings years of industry expertise, ensuring every project meets the highest standards.',
    accent: '#0891b2',
    bg: 'rgba(8, 145, 178, 0.08)',
    numColor: '#0891b2',
  },
  {
    title: 'Tailored Solutions',
    desc: 'Every client is unique, and so are our designs. We adapt to your vision and goals.',
    accent: '#059669',
    bg: 'rgba(5, 150, 105, 0.08)',
    numColor: '#059669',
  },
  {
    title: 'Innovative Approach',
    desc: "We're always exploring the latest trends and tools to keep our work fresh and relevant.",
    accent: '#d97706',
    bg: 'rgba(217, 119, 6, 0.08)',
    numColor: '#d97706',
  },
]

function WhyUs() {
  const left = useScrollAnimation()
  const right = useScrollAnimation()

  return (
    <section className="section whyus" id="about">
      <div className="container">
        <div className="whyus__inner">
          <div className="whyus__left" ref={left.ref}>
            <p className={`section-label fade-left ${left.visible ? 'visible' : ''}`}>Why Choose Us</p>
            <h2 className={`section-title fade-left delay-1 ${left.visible ? 'visible' : ''}`}>
              The Decade<br />Difference
            </h2>
            <p className={`section-subtitle fade-left delay-2 ${left.visible ? 'visible' : ''}`}>
              We're not just a service provider — we're your growth partner,
              committed to delivering results that matter.
            </p>
            <a href="#contact"
              className={`btn-primary fade-left delay-3 ${left.visible ? 'visible' : ''}`}
              style={{ marginTop: '32px', display: 'inline-flex' }}>
              Work With Us
            </a>
          </div>

          <div className="whyus__grid" ref={right.ref}>
            {reasons.map((r, i) => (
              <div
                className={`whyus__card fade-right ${right.visible ? 'visible' : ''}`}
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  background: r.bg,
                  borderLeft: `3px solid ${r.accent}`,
                }}
                key={i}
              >
                <div className="whyus__number" style={{ color: r.numColor }}>0{i + 1}</div>
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