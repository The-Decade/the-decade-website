import './Footer.css'

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/thedecadezw/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/the-decadezw',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@thedecadezw',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/thedecadezw/',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

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
            <div className="footer__social" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={`Follow The Decade on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
