import { Request, Response } from 'express'
import { User } from './user.model'

export const getProfile = async (req: Request, res: Response) => {
   const { email } = req.user
   try {
      let user = await User.findOne({ email })
      let userProfile

      if (user) {
         userProfile = user.sanitizeObject()
         return res.json(userProfile)
      }

      const newUser = new User({
         email: req.user.email,
         displayName: req.user.name,
         uid: req.user.uid,
         picture: req.user.picture,
         isAnonymous: req.user.isAnonymous
      })

      await newUser.save()
      userProfile = newUser.sanitizeObject()
      return res.json(userProfile)
   } catch (err) {
      console.log(err.stack)
      res.status(500).json({ message: err.message })
   }
}
