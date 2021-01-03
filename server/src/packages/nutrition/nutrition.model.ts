import mongoose from 'mongoose'
import * as helpers from '../../helpers'

const { Schema } = mongoose

const NutritionSchema = new Schema({
   author: {
      uid: String,
      displayName: String
   },
   meal: Object,
   createdAt: { type: Date, default: () => Date.now() }
})

interface INutrition extends mongoose.Document {
   author: {
      uid: string
      displayName: string
   }
   meal: any
   createdAt: Date
   verifyOwnership(uid: string): boolean
   findSimilarMealType(newMealType: number, tz: string): Promise<INutrition>
   sanitizeObject(): Omit<INutrition, 'author'>
}

interface INutritionModel extends mongoose.Model<INutrition> {
   verifyOwnership: (uid: string) => boolean
   findSimilarMealType: (newMealType: number, tz: string) => Promise<INutrition>
   sanitizeObject: () => Omit<INutrition, 'author'>
}

NutritionSchema.methods.verifyOwnership = function (uid: string) {
   return this.author.uid === uid
}

NutritionSchema.methods.sanitizeObject = function () {
   return {
      meal: this.meal,
      id: this._id
   }
}

NutritionSchema.methods.findSimilarMealType = async function (
   newMealType: number,
   tz: string
): Promise<INutrition> {
   return await this.model('Nutrition').findOne({
      'author.uid': this.author.uid,
      'meal.type': newMealType,
      'meal.date': {
         $gte: helpers.getStartDayDate(this.meal.date, tz),
         $lte: helpers.getEndDayDate(this.meal.date, tz)
      }
   })
}

export const Nutrition: INutritionModel = mongoose.model<
   INutrition,
   INutritionModel
>('Nutrition', NutritionSchema, 'nutrition')
