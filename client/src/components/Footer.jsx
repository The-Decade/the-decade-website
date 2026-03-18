import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">THE DECADE</h3>
            <p className="footer__text">
              We help startups and businesses grow through bold design, smart marketing, and powerful web solutions.
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              <li><a href="#services">Graphic Design</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Hosting Services</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Connect</h4>
            <p className="footer__text">Get in touch to discuss your next project.</p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '12px' }}>
              Start a Project
            </a>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__text-muted">&copy; {currentYear} The Decade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
