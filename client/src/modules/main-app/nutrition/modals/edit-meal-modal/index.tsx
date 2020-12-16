import React, { FC, useState } from 'react'

import { Meal, MealTypes, MealIngredient } from '../../../../../types/nutrition'
import * as nutritionUtils from '../../../../../utilities/nutrition'

import SelectMealType from '../common/select-type'
import MealIngredients from '../common/ingredients'
import MealComments from '../common/comments'
import MealDatePicker from '../common/date'
import EditMealActionButton from './action-buttons'

import { Box, Typography } from '@material-ui/core'
import * as _ from 'lodash'

const EditMealModalContent: FC<{
   onCancelEdit: () => void
   onConfirmEdit: (meal: Meal) => Promise<any>
   mealToBeUpdated: Meal
   toggler: () => void
}> = ({ onCancelEdit, onConfirmEdit, mealToBeUpdated, toggler }) => {
   const [state, setState] = useState<Meal>(mealToBeUpdated)
   const [isUpdating, setIsUpdating] = useState<boolean>(false)

   const [tempState] = useState<Meal>(_.cloneDeep(state))

   // Add Meal ingredient
   const onAddMealIngredient = () => {
      const newIngredient = nutritionUtils.makeNewMealIngredient()
      setState((prevState) => ({
         ...prevState,
         ingredients: [newIngredient, ...prevState.ingredients]
      }))
   }

   // Delete Meal Ingredient
   const onDeleteMealIngredient = (id: string) => {
      if (state.ingredients.length === 1) return onCancelEdit()
      setState((prevState) => ({
         ...prevState,
         ingredients: [...prevState.ingredients.filter((ing) => ing.id !== id)]
      }))
   }

   // onChange Meal Ingredient
   const onChangeMealIngredient = (ingredients: MealIngredient[]) => {
      setState((prevState) => ({
         ...prevState,
         ingredients
      }))
   }

   // onChange Meal Comments
   const onChangeMealComments = (comments: string) => {
      setState((prevState) => ({
         ...prevState,
         comments
      }))
   }

   // onChange Meal Type
   const onChangeMealType = (type: MealTypes) => {
      setState((prevState) => ({
         ...prevState,
         type
      }))
   }

   // onChange Meal Time
   const onChangeMealTime = (date: Date) => {
      setState((prevState) => ({
         ...prevState,
         date
      }))
   }

   // Confirm Add Meal
   const onConfirm = async () => {
      if (_.isEqual(tempState, state)) return toggler()
      setIsUpdating(true)
      try {
         await onConfirmEdit(state)
      } catch (err) {
         // TODO handle err
         console.log(err)
         setIsUpdating(false)
      }
   }

   return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         {/*Meal Type*/}
         <Box display="flex" padding="16px 0" justifyContent="space-between">
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>
               Edit Meal
            </Typography>
            <SelectMealType type={state.type} onChange={onChangeMealType} />
         </Box>
         {/*Meal Ingredients*/}
         <MealIngredients
            ingredients={state.ingredients}
            onAdd={onAddMealIngredient}
            onDelete={onDeleteMealIngredient}
            onChange={onChangeMealIngredient}
         />

         {/*Meal Comments*/}
         <MealComments
            onChange={onChangeMealComments}
            comments={state.comments}
         />

         {/*Meal Date*/}
         <MealDatePicker
            onAcceptTime={onChangeMealTime}
            date={state.date}
            disabled={true}
         />

         {/*Action Buttons*/}
         <EditMealActionButton
            isDisabled={!!nutritionUtils.isValidMeal(state)}
            onConfirm={onConfirm}
            onCancel={onCancelEdit}
            isUpdating={isUpdating}
         />
      </div>
   )
}

export default EditMealModalContent
