import './Contact.css'

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Get In Touch</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Us</h2>
        <div className="accent-bar" />

        <div className="contact__inner">
          <div className="contact__info">
            <h3 className="contact__info-title">Let's Work Together</h3>
            <p className="contact__info-desc">
              Ready to take your business to the next level? Reach out and let's
              build something exceptional together.
            </p>
            <div className="contact__details">
              <div className="contact__detail-item">
                <span className="contact__detail-icon">📞</span>
                <span>+263 771 684 163</span>
              </div>
              <div className="contact__detail-item">
                <span className="contact__detail-icon">✉️</span>
                <span>thedecadedigitalsolutions@gmail.com</span>
              </div>
              <div className="contact__detail-item">
                <span className="contact__detail-icon">📍</span>
                <span>Suite 29, Cecilia Business Center,<br />6 Chelmsford Road, Belgravia</span>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="contact__form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="contact__form-group">
              <label>Service</label>
              <select>
                <option value="">Select a service</option>
                <option>Graphic Design</option>
                <option>Digital Marketing</option>
                <option>Web Development</option>
                <option>Hosting Services</option>
              </select>
            </div>
            <div className="contact__form-group">
              <label>Message</label>
              <textarea rows={5} placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact