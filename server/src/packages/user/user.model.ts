import mongoose from 'mongoose'

const { Schema } = mongoose

const UserSchema = new Schema({
   email: String,
   displayName: String,
   uid: String,
   picture: String,
   isAnonymous: Boolean,
   createdAt: { type: Date, default: () => Date.now() }
})

interface IUser extends mongoose.Document {
   email: string
   displayName: string
   uid: string
   picture: string
   createdAt: Date | string
   sanitizeObject(): UserSO
}

type UserSO = {
   email: string
   displayName: string
   picture: string
}

interface IUserModel extends mongoose.Model<IUser> {
   sanitizeObject: () => UserSO
}

UserSchema.methods.sanitizeObject = function (): UserSO {
   return {
      email: this.email,
      displayName: this.displayName,
      picture: this.picture
   }
}

export const User: IUserModel = mongoose.model<IUser, IUserModel>(
   'User',
   UserSchema,
   'users'
)
