import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Hero.css'

function Hero() {
  const { ref, visible } = useScrollAnimation(0.05)

  return (
    <section className="hero">
      <div className="hero__bg-glow" />
      <div className="container hero__inner" ref={ref}>
        <p className={`section-label fade-up ${visible ? 'visible' : ''}`}>
          Marketing & Software Solutions
        </p>
        <h1 className={`hero__title fade-up delay-1 ${visible ? 'visible' : ''}`}>
          Where Creativity<br />
          <span className="gradient-text">Meets Innovation</span>
        </h1>
        <div className={`accent-bar fade-up delay-2 ${visible ? 'visible' : ''}`}
          style={{ margin: '28px 0' }} />
        <p className={`section-subtitle fade-up delay-2 ${visible ? 'visible' : ''}`}>
          We help startups and businesses grow, compete, and thrive in the digital age —
          through bold design, smart marketing, and powerful web solutions.
        </p>
        <div className={`hero__actions fade-up delay-3 ${visible ? 'visible' : ''}`}>
          <a href="#services" className="btn-primary">Explore Services</a>
          <a href="#portfolio" className="btn-outline">View Our Work</a>
        </div>
      </div>
    </section>
  )
}

export default Hero