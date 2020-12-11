import { MealIngredient, Meal } from '../../types/nutrition'
import { uuid } from '..'
import moment from 'moment'
import { MealTypes } from '../../types/nutrition'

const mealIngredient = (uuid: () => string): (() => MealIngredient) => {
   return () => {
      return { id: uuid(), item: '', amount: '', unit: 'g' }
   }
}

export const mealTypes = [
   { const: 'Breakfast', value: 1 },
   { const: 'Lunch', value: 2 },
   { const: 'Dinner', value: 3 },
   { const: 'Easy meal/Snack', value: 4 }
]

export const units = ['g', 'ml']

export const makeNewMeal = () => {
   return {
      type: mealTypes[0].value as MealTypes,
      ingredients: [makeNewMealIngredient()],
      comments: '',
      date: moment().toDate()
   }
}

export const makeNewMealIngredient = mealIngredient(uuid)

export const isValidMeal = (state: Meal) => {
   if (!state.date) return false
   if (!state.ingredients.every((ing) => ing.item.trim())) return false
   if (!state.type) return false
   return 'ok'
}
