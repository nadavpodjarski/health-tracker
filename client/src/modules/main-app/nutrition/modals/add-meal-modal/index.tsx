import React, { FC, useState } from 'react'

import { Meal, MealIngredient, MealTypes } from '../../../../../types/nutrition'
import * as nutritionUtils from '../../../../../utilities/nutrition'

import SelectMealType from '../shared/select-type'
import MealIngredients from '../shared/ingredients'
import MealComments from '../shared/comments'
import MealDatePicker from '../shared/date'
import AddMealActionButtons from './action-buttons'

import { useDispatch } from 'react-redux'
import * as uiActions from '../../../../../redux/ui/actions'
import * as nutritionActions from '../../../../../redux/nutrition/actions'

import { Typography, Box } from '@material-ui/core'

const AddMealModalContent: FC<{ meal?: Meal }> = ({ meal }) => {
   const [state, setState] = useState<Meal>(
      meal || nutritionUtils.makeNewMeal()
   )
   const [isSaving, setIsSaving] = useState<boolean>(false)

   const dispatch = useDispatch()

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
      if (state.ingredients.length === 1)
         return dispatch(uiActions.closeModal())
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
         await dispatch(nutritionActions.addMeal(state))
         dispatch(uiActions.closeModal())
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
            onCancel={() => dispatch(uiActions.closeModal())}
            isSaving={isSaving}
            isDisabled={!!nutritionUtils.isValidMeal(state)}
         />
      </div>
   )
}

export default AddMealModalContent
