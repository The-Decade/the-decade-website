import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Portfolio', href: 'portfolio' },
  { label: 'Team', href: 'team' },
  { label: 'Contact', href: 'contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map(l => document.getElementById(l.href))
      const scrollPos = window.scrollY + 100

      sections.forEach(section => {
        if (!section) return
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          THE <span className="gradient-text">DECADE</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={`#${link.href}`}
                className={activeSection === link.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </li>
        </ul>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar