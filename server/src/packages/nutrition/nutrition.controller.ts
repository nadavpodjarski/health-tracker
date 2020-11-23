import { Request, Response } from 'express'
import { Nutrition } from './nutrition.model'

import { ObjectId } from 'bson'
import mongoose from 'mongoose'

import * as _ from 'lodash'
import * as helpers from '../../helpers'

export const addMeal = async (req: Request, res: Response) => {
   const { data: meal } = req.body
   if (_.isEmpty(meal))
      return res.status(400).json('Unable To Proccess Request')

   try {
      if (meal.type !== MealTypes['Easy meal/Snack']) {
         const docWithSameMealType = !!(await Nutrition.findOne({
            'author.uid': req.user?.uid,
            'meal.type': meal.type,
            'meal.date': {
               $gte: helpers.getStartDayDate(meal.date),
               $lte: helpers.getEndDayDate(meal.date)
            }
         }))
         if (docWithSameMealType) {
            return res
               .status(400)
               .json(
                  `${MealTypes[meal.type]} on ${helpers.formatDate(
                     meal.date
                  )} Already exist`
               )
         }
      }
      meal.date = helpers.stringToDate(meal.date)
      const newMeal = new Nutrition({
         author: {
            uid: req.user?.uid,
            displayName: req.user?.displayName
         },
         meal
      })
      await newMeal.save()
      return res.status(200).json({ message: 'Meal Added Successfully' })
   } catch (err) {
      console.log(err.stack)
      return res.status(500).json('There was an error while adding meal')
   }
}

export const getMeals = async (req: Request, res: Response) => {
   const { startAt, endAt } = req.query

   if (!startAt || !endAt)
      return res.status(400).json('Unable To Proccess Request')

   try {
      const start = helpers.getStartDayDate(startAt as string)
      const end = helpers.getEndDayDate(endAt as string)

      const meals = await Nutrition.aggregate([
         {
            $match: {
               $and: [
                  {
                     'meal.date': { $gte: start, $lte: end }
                  },
                  { 'author.uid': req.user?.uid }
               ]
            }
         },
         { $sort: { 'meal.date': 1 } },
         {
            $group: {
               _id: {
                  $dateToString: {
                     format: '%d/%m/%Y',
                     date: '$meal.date',
                     timezone: req.user.timezone
                  }
               },
               meals: { $push: { meal: '$meal', id: '$_id' } }
            }
         },
         { $sort: { 'meals.meal.date': -1 } }
      ])

      return res.json(meals)
   } catch (err) {
      console.log(err.stack)
      return res.status(500).json('There was an Error while fetching meals')
   }
}

export const deletMeal = async (req: Request, res: Response) => {
   const { docId: _id } = req.query

   if (!mongoose.isValidObjectId(_id) || typeof _id !== 'string')
      return res.status(400).json('Unable To Proccess Request')

   try {
      const doc = await Nutrition.findOne({ _id })

      if (!doc?.verifyOwnership(req.user.uid))
         return res.status(403).json('Unauthorized request')

      await doc.deleteOne()

      return res.json({ message: 'Meal Deleted Successfully', docId: _id })
   } catch (err) {
      console.log(err.stack)
      return res.status(500).json('There was an Error while deleting meal')
   }
}

export const editMeal = async (req: Request, res: Response) => {
   const {
      data: { meal, docId: _id }
   } = req.body

   if (!mongoose.isValidObjectId(_id) || _.isEmpty(meal))
      res.status(400).json('Unable To Proccess Request')

   try {
      const doc = await Nutrition.findOne({
         _id
      })

      if (!doc?.verifyOwnership(req.user.uid))
         return res.status(403).json('Unauthorized request')

      if (meal.type !== MealTypes['Easy meal/Snack']) {
         const docWithSameMealType = await doc.findSimilarMealType(meal?.type)

         if (
            docWithSameMealType &&
            isNotSameDoc(docWithSameMealType._id, doc._id)
         ) {
            return res
               .status(400)
               .json(
                  `${MealTypes[meal.type]} on ${helpers.formatDate(
                     meal.date
                  )} Already exist`
               )
         }
      }

      meal.date = helpers.stringToDate(meal?.date)

      await doc?.updateOne({ $set: { meal } })

      return res.json({
         message: 'Meal Updated Successfully',
         docId: _id,
         meal
      })
   } catch (err) {
      console.log(err.stack)
      return res.status(500).json('There was an Error while updating meal')
   }
}

const isNotSameDoc = (firstDocId: string, secondDocId: string) => {
   return !new ObjectId(firstDocId).equals(secondDocId)
}

export enum MealTypes {
   Breakfast = 1,
   Lunch = 2,
   Dinner = 3,
   'Easy meal/Snack' = 4
}
