import React, { FC } from 'react'
import {
   TextField,
   Grid,
   Select,
   MenuItem,
   IconButton,
   Divider
} from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import { MealIngredient as Ingredient } from '../../../../../types/nutrition'
import * as utils from '../../../../../utilities/nutrition'
import InputNumberForamt from '../../../../../common/components/input-number-format'

const MealIngredient: FC<{
   ingredient: Ingredient
   onDelete: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => void | undefined
   onChange: (ing: Ingredient) => void
}> = ({ ingredient, onDelete, onChange }) => {
   //
   const onChangeHandler = (
      event:
         | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
         | React.ChangeEvent<{
              name?: string | undefined
              value: unknown
           }>
   ) => {
      const { name, value } = event.target
      if (typeof name === 'string') {
         const newState: Ingredient = {
            ...ingredient,
            [name]: value
         }

         onChange(newState)
      }
   }
   return (
      <Grid
         container
         spacing={1}
         alignItems="center"
         style={{ paddingTop: '8px' }}
         key={`ingredientModal_${ingredient.id}`}
      >
         <Grid item xs={6} sm={6}>
            <TextField
               onChange={onChangeHandler}
               name="item"
               value={ingredient.item}
               variant="outlined"
               placeholder="* Food"
               error={!ingredient.item}
            />
         </Grid>
         <Grid item xs={6} sm={3}>
            <TextField
               onChange={onChangeHandler}
               name="amount"
               value={ingredient.amount}
               variant="outlined"
               placeholder="Amount"
               InputProps={{
                  inputComponent: InputNumberForamt as any
               }}
            />
         </Grid>
         <Grid item xs={6} sm={2}>
            <Select
               onChange={onChangeHandler}
               name="unit"
               value={ingredient.unit}
               variant="outlined"
               fullWidth
            >
               {utils.units.map((unit, i) => {
                  return (
                     <MenuItem key={`select-meal-type_${i}`} value={unit}>
                        {unit}
                     </MenuItem>
                  )
               })}
            </Select>
         </Grid>
         <Grid item xs={6} sm={1}>
            <IconButton onClick={onDelete}>
               <DeleteIcon />
            </IconButton>
         </Grid>
         <Grid item xs={12}>
            <Divider style={{ margin: '8px 0' }} />
         </Grid>
      </Grid>
   )
}

export default MealIngredient
