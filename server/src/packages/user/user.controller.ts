import { Request, Response } from 'express'
import { User } from './user.model'

export const addUser = async (req: Request, res: Response) => {
   const { email } = req.user
   const { data } = req.body
   try {
      let user = await User.findOne({ email })
      if (!user) {
         const newUser = new User({
            email: req.user.email,
            displayName: req.user.name,
            uid: req.user.uid,
            picture: req.user.picture
         })
         user = await newUser.save()
      }

      const sanitizedUserObject = user.sanitizeObject()

      res.json(sanitizedUserObject)
   } catch (err) {
      console.log(err.stack)
      res.status(500).json({ message: err.message })
   }
}
