import React, { FC, useState } from 'react'

import { Meal, MealIngredient, MealTypes } from '../../../../../types/nutrition'
import * as nutritionUtils from '../../../../../utilities/nutrition'

import SelectMealType from '../common/select-type'
import MealIngredients from '../common/ingredients'
import MealComments from '../common/comments'
import MealDatePicker from '../common/date'
import AddMealActionButtons from './action-buttons'

import { Typography, Box } from '@material-ui/core'

const AddMealModalContent: FC<{
   modalToggler: () => void
   onAddMeal: (meal: Meal) => Promise<any>
   meal: Meal
}> = ({ modalToggler, onAddMeal, meal }) => {
   const [state, setState] = useState<Meal>(meal)
   const [isSaving, setIsSaving] = useState<boolean>(false)

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
      if (state.ingredients.length === 1) return modalToggler()
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
      setIsSaving(true)
      try {
         await onAddMeal(state)
         modalToggler()
      } catch (err) {
         // TODO handle err
         console.log(err)
         setIsSaving(false)
      }
   }

   return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         {/*Meal Type*/}
         <Box display="flex" padding="16px 0" justifyContent="space-between">
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>
               Add Meal
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
         <MealDatePicker onAcceptTime={onChangeMealTime} date={state.date} />

         {/*Action Buttons*/}
         <AddMealActionButtons
            onConfirm={onConfirm}
            onCancel={modalToggler}
            isSaving={isSaving}
            isDisabled={!!nutritionUtils.isValidMeal(state)}
         />
      </div>
   )
}

export default AddMealModalContent
