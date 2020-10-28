import mongoose from "mongoose";

const { Schema } = mongoose;

const UserModelSchema = new Schema({
  email: String,
  displayName: String,
  uid: String,
  picture: String,
  createdAt: { type: Date, default: Date.now() }
});

export const UserModel = mongoose.model("User", UserModelSchema);
