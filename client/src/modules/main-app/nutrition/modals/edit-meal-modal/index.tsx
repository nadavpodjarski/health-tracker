import React, { FC, useState } from 'react'

import {
   Meal,
   MealTypes,
   MealIngredient,
   MealDoc
} from '../../../../../types/nutrition'
import * as nutritionUtils from '../../../../../utilities/nutrition'

import SelectMealType from '../shared/select-type'
import MealIngredients from '../shared/ingredients'
import MealComments from '../shared/comments'
import MealDatePicker from '../shared/date'
import EditMealActionButton from './action-buttons'

import { Box, Typography } from '@material-ui/core'
import * as _ from 'lodash'

import { useDispatch } from 'react-redux'
import * as uiActions from '../../../../../redux/ui/actions'
import * as nutritionActions from '../../../../../redux/nutrition/actions'

const EditMealModalContent: FC<{
   mealDoc: MealDoc
}> = ({ mealDoc }) => {
   const [meal, updateMeal] = useState<Meal>(mealDoc.meal)
   const [isUpdating, setIsUpdating] = useState<boolean>(false)

   const [tempState] = useState<Meal>(_.cloneDeep(meal))

   const dispatch = useDispatch()

   const onAddMealIngredient = () => {
      const newIngredient = nutritionUtils.makeNewMealIngredient()
      updateMeal((prevState) => ({
         ...prevState,
         ingredients: [newIngredient, ...prevState.ingredients]
      }))
   }

   const onDeleteMealIngredient = (id: string) => {
      if (meal.ingredients.length === 1) return dispatch(uiActions.closeModal())
      updateMeal((prevState) => ({
         ...prevState,
         ingredients: [...prevState.ingredients.filter((ing) => ing.id !== id)]
      }))
   }

   const onChangeMealIngredient = (ingredients: MealIngredient[]) => {
      updateMeal((prevState) => ({
         ...prevState,
         ingredients
      }))
   }

   const onChangeMealComments = (comments: string) => {
      updateMeal((prevState) => ({
         ...prevState,
         comments
      }))
   }

   const onChangeMealType = (type: MealTypes) => {
      updateMeal((prevState) => ({
         ...prevState,
         type
      }))
   }

   const onChangeMealTime = (date: Date) => {
      updateMeal((prevState) => ({
         ...prevState,
         date
      }))
   }

   const onConfirm = async () => {
      if (_.isEqual(tempState, meal)) return dispatch(uiActions.closeModal())
      setIsUpdating(true)
      try {
         await dispatch(nutritionActions.editMeal(meal, mealDoc.id))
      } catch (err) {
         setIsUpdating(false)
      } finally {
         dispatch(uiActions.closeModal())
      }
   }

   return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         <Box display="flex" padding="16px 0" justifyContent="space-between">
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>
               Edit Meal
            </Typography>
            <SelectMealType type={meal.type} onChange={onChangeMealType} />
         </Box>
         <MealIngredients
            ingredients={meal.ingredients}
            onAdd={onAddMealIngredient}
            onDelete={onDeleteMealIngredient}
            onChange={onChangeMealIngredient}
         />

         <MealComments
            onChange={onChangeMealComments}
            comments={meal.comments}
         />

         <MealDatePicker
            onAcceptTime={onChangeMealTime}
            date={meal.date}
            disabled={true}
         />

         <EditMealActionButton
            isDisabled={!!nutritionUtils.isValidMeal(meal)}
            onConfirm={onConfirm}
            onCancel={() => dispatch(uiActions.closeModal())}
            isUpdating={isUpdating}
         />
      </div>
   )
}

export default EditMealModalContent
