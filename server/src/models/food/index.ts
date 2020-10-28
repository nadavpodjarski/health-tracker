import mongoose from "mongoose";

const { Schema } = mongoose;

const MealSchema = new Schema({
  author: {
    uid: String,
    displayName: String
  },
  meal: Object,
  createdAt: { type: Date, default: Date.now() }
});

export const MealModel = mongoose.model("Meal", MealSchema);
