import { Request, Response } from 'express'
import { mailer } from '../../config/mailer'

export const postContactForm = async (req: Request, res: Response) => {
   const {
      data: { email, subject, message }
   } = req.body

   try {
      const mailRes = await mailer(email, message, subject)
      res.json({ message: mailRes.msg })
   } catch (err) {
      console.log(err.stack)
      res.status(500).json('There was a problem sending message')
   }
}
