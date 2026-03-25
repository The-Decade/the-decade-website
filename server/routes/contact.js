const express = require('express')
const router = express.Router()
const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

router.post('/', async (req, res) => {
  const { name, email, service, message } = req.body

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  try {
    await resend.emails.send({
      from: 'The Decade Website <manager@the-decade.co.zw>',
      to: ['manager@the-decade.co.zw'],
      replyTo: email,
      subject: `New Enquiry: ${service} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #7c3aed; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Website Enquiry</h2>
          </div>
          <div style="background: #f8f7ff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb;">${message}</p>
          </div>
        </div>
      `,
    })

    await resend.emails.send({
      from: 'The Decade <manager@the-decade.co.zw>',
      to: [email],
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #7c3aed; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">Thanks for contacting The Decade!</h2>
          </div>
          <div style="background: #f8f7ff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <p>Hi ${name},</p>
            <p>We've received your enquiry about <strong>${service}</strong> and will get back to you shortly.</p>
            <p>In the meantime, feel free to browse our work at <a href="https://the-decade.co.zw">the-decade.co.zw</a>.</p>
            <br/>
            <p>Best regards,<br/><strong>The Decade Team</strong></p>
          </div>
        </div>
      `,
    })

    res.status(200).json({ success: true, message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
})

module.exports = router