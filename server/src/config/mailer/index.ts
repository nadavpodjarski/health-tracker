import nodemailer from 'nodemailer'
import 'dotenv/config'

export async function mailer(from: string, msg: string, subject: string) {
   // Generate test SMTP service account from ethereal.email
   // Only needed if you don't have a real mail account for testing
   // create reusable transporter object using the default SMTP transport
   try {
      let transporter = nodemailer.createTransport({
         host: 'smtp.gmail.com',
         port: 587,
         secure: false,
         auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
         }
      })

      // send mail with defined transport object
      let info = await transporter.sendMail({
         from: from, // sender address
         to: process.env.EMAIL, // list of receivers
         subject: subject,
         text: msg, // plain text body
         html: `<b>Message from Mitummy</b> <p>${msg}</p>`
      })

      //   console.log('Message sent: %s', info.messageId)
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      return { msg: 'Message Received Successffully' }
   } catch (err) {
      throw err
   }
}
