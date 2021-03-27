const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {

  if (req.method !== 'POST')
    return res.status(403).json({ report: false, message: '403 Forbidden.' })

  const { name, email, message } = JSON.parse(req.body)
  const msg = {
    to: process.env.RECEIVER_EMAIL,   // Change to your recipient
    from: process.env.SENDER_EMAIL,   // Change to your verified sender
    subject: `message from ${name}`,
    text: `
        name: ${name}\n
        email: ${email}\n
        message: ${message}
     `
  }
  try {
    await sgMail.send(msg)
    console.log('Email sent')
    return res.status(200).json({ report: true, message: 'Message Received!' })
  }
  catch (error) {
    console.log(error)
    return res.status(500).json({ report: false, message: 'Something went Wrong...Unable to seng Message' })
  }
}
