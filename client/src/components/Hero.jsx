import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-glow" />
      <div className="container hero__inner">
        <p className="section-label">Marketing & Software Solutions</p>
        <h1 className="hero__title">
          Where Creativity<br />
          <span className="gradient-text">Meets Innovation</span>
        </h1>
        <div className="accent-bar" style={{ margin: '28px 0' }} />
        <p className="section-subtitle">
          We help startups and businesses grow, compete, and thrive in the digital age —
          through bold design, smart marketing, and powerful web solutions.
        </p>
        <div className="hero__actions">
          <a href="#services" className="btn-primary">Explore Services</a>
          <a href="#portfolio" className="btn-outline">View Our Work</a>
        </div>
      </div>
    </section>
  )
}

export default Hero