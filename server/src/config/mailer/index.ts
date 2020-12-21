import sgMail from '@sendgrid/mail'

import 'dotenv/config'

sgMail.setApiKey(process.env.SEND_GRID_APIKEY as string)

export async function mailer(from: string, msg: string, subject: string) {
   try {
      let info = await sgMail.send({
         from: process.env.EMAIL as string, // sender address
         to: process.env.EMAIL, // list of receivers
         subject: subject || 'no subject',
         text: msg, // plain text body
         html: `<b>Message from  Mitummy - ${from}</b> <p>${msg}</p>`
      })

      return { msg: 'Message Received Successfully' }
   } catch (err) {
      console.log(err.stack)
      throw err
   }
}
