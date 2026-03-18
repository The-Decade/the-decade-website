import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Contact.css'

const initialForm = { name: '', email: '', service: '', message: '' }
const initialErrors = { name: '', email: '', service: '', message: '' }

function validate(form) {
  const errors = { ...initialErrors }
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Please enter a valid email.'
  if (!form.service) errors.service = 'Please select a service.'
  if (!form.message.trim()) errors.message = 'Message is required.'
  else if (form.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.'
  return errors
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const left = useScrollAnimation()
  const right = useScrollAnimation()

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.values(validationErrors).some(Boolean)) {
      setErrors(validationErrors)
      return
    }
    setSubmitting(true)
    // We'll wire this to the backend in Step 6
    await new Promise(r => setTimeout(r, 1000))
    setSubmitting(false)
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Get In Touch</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Us</h2>
        <div className="accent-bar" />

        <div className="contact__inner">
          <div className="contact__info" ref={left.ref}>
            <h3 className={`contact__info-title fade-left ${left.visible ? 'visible' : ''}`}>
              Let's Work Together
            </h3>
            <p className={`contact__info-desc fade-left delay-1 ${left.visible ? 'visible' : ''}`}>
              Ready to take your business to the next level? Reach out and let's
              build something exceptional together.
            </p>
            <div className={`contact__details fade-left delay-2 ${left.visible ? 'visible' : ''}`}>
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

          <div ref={right.ref}>
            {submitted ? (
              <div className={`contact__success fade-up ${right.visible ? 'visible' : ''}`}>
                <div className="contact__success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you shortly.</p>
                <button className="btn-outline" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form
                className={`contact__form fade-right ${right.visible ? 'visible' : ''}`}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={errors.name ? 'input--error' : ''}
                    />
                    {errors.name && <span className="contact__error">{errors.name}</span>}
                  </div>
                  <div className="contact__form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={errors.email ? 'input--error' : ''}
                    />
                    {errors.email && <span className="contact__error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact__form-group">
                  <label>Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={errors.service ? 'input--error' : ''}
                  >
                    <option value="">Select a service</option>
                    <option>Graphic Design</option>
                    <option>Digital Marketing</option>
                    <option>Web Development</option>
                    <option>Hosting Services</option>
                  </select>
                  {errors.service && <span className="contact__error">{errors.service}</span>}
                </div>

                <div className="contact__form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={errors.message ? 'input--error' : ''}
                  />
                  {errors.message && <span className="contact__error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact