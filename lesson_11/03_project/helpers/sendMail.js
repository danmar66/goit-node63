const nodemailer = require('nodemailer')

const { EMAIL_PASS, EMAIL_USER } = process.env

async function sendMail({ to, subject, html }) {
  const email = {
    from: 'info@bookingclub.com',
    to,
    subject,
    html,
  }

  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  })

  const response = await transport.sendMail(email)
  console.log('sendMail > response = ', response)
}

module.exports = sendMail
