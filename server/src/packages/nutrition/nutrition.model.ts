import mongoose from "mongoose";
import * as helpers from "../../helpers";

const { Schema } = mongoose;

const MealSchema = new Schema({
  author: {
    uid: String,
    displayName: String
  },
  meal: Object,
  createdAt: { type: Date, default: Date.now() }
});

// interface IMeallDocument extends mongoose.Document {
//   author: {
//     uid: string;
//     displayName: string;
//   };
//   meal: Object;
//   createdAt: Date;
// }

// interface IMealModel extends mongoose.Model<IMeallDocument> {
//   isMealTypeExist(mealType: string, date: Date | string): Promise<Boolean>;
// }

// MealSchema.statics.isMealTypeExist = function (
//   mealtype: string | number,
//   date: Date | string
// ) {
//   return !!(
//     this.meal.type === mealtype &&
//     this.meal.date >= helpers.getStartDayDate(date) &&
//     this.meal.date <= helpers.getEndDayDate(date)
//   );
// };

export const Meal = mongoose.model("Meal", MealSchema, "nutrition");
