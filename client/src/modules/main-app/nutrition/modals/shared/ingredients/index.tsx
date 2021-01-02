import React, { FC } from 'react'
import { Typography, IconButton, Grid } from '@material-ui/core'
import MealIngredient from '../meal-ingredient'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { MealIngredient as Ingredient } from '../../../../../../types/nutrition'

const MealIngredients: FC<{
   ingredients: Ingredient[]
   onAdd: () => void
   onDelete: (id: string) => void
   onChange: (ingredients: Ingredient[]) => void
}> = ({ ingredients, onAdd, onDelete, onChange }) => {
   const onChangeHandler = (ingredient: Ingredient, index: number) => {
      ingredients[index] = ingredient
      onChange(ingredients)
   }

   return (
      <>
         <Grid container alignItems="center" spacing={1}>
            <Grid item>
               <Typography variant="h6">Add Ingredient</Typography>
            </Grid>
            <Grid item>
               <IconButton onClick={onAdd}>
                  <AddCircleOutlineIcon />
               </IconButton>
            </Grid>
         </Grid>

         <Grid container spacing={3}>
            {ingredients.map((ing, i) => {
               return (
                  <Grid item xs={12} md={6} key={`modal_ingredient-${i}`}>
                     <MealIngredient
                        ingredient={ing}
                        onDelete={(event) => onDelete(ing.id)}
                        onChange={(ingredient) =>
                           onChangeHandler(ingredient, i)
                        }
                     />
                  </Grid>
               )
            })}
         </Grid>
      </>
   )
}

export default MealIngredients
