import { Request, Response } from 'express'
import { User } from './user.model'

export const addUser = async (req: Request, res: Response) => {
   const { email } = req?.user
   try {
      let user = await User.findOne({ email })

      if (!user) {
         const newUser = new User(req.user)
         user = await newUser.save()
      }

      const sanitizedUserObject = user.sanitizeObject()

      res.json(sanitizedUserObject)
   } catch (err) {
      console.log(err.stack)
      res.status(500).json({ message: err.message })
   }
}
