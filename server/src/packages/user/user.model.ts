import mongoose from "mongoose";

const { Schema } = mongoose;

interface IUser extends mongoose.Document {
  email: string;
  displayName: string;
  uid: string;
  picture: string;
  createdAt: Date | string;
}

type UserSO = {
  email: string;
  displayName: string;
  picture: string;
};

interface IUserModel extends mongoose.Model<IUser> {}

const UserSchema = new Schema({
  email: String,
  displayName: String,
  uid: String,
  picture: String,
  createdAt: { type: Date, default: Date.now() }
});

// UserSchema.post("findOne", function (doc: IUser, next) {
//   next();
// });

// UserSchema.pre<IUser>("save", function (next) {
//   next();
// });

export const User: IUserModel = mongoose.model<IUser, IUserModel>(
  "User",
  UserSchema,
  "users"
);
