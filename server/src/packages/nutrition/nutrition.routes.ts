import { Router } from 'express'
import * as NutritionController from './nutrition.controller'

export const nutritionRouter = Router()

nutritionRouter.get('/get-meals', NutritionController.getMeals)
nutritionRouter.post('/add-meal', NutritionController.addMeal)
nutritionRouter.delete('/delete-meal', NutritionController.deletMeal)
nutritionRouter.put('/edit-meal', NutritionController.editMeal)
