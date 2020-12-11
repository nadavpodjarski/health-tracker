import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { MealIngredient } from '../../../../../types/nutrition'
import { makeStyles, Theme, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
   ingredient: {
      margin: '4px 0px',
      [theme.breakpoints.down('sm')]: {
         margin: 0
      }
   },
   span: {
      padding: '4px 12px',
      background: theme.palette.background.default,
      borderRadius: '25px',
      border: '1px solid rgba(0,0,0,0.3)',
      cursor: 'pointer',
      margin: '8px 0',
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
         fontSize: 14
      }
   },
   unit: {
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
         fontSize: 14
      }
   }
}))

const Ingredients: FC<{ ingredients: MealIngredient[] }> = ({
   ingredients
}) => {
   const classes = useStyles()
   return (
      <>
         {ingredients.map((ingredient, i) => {
            return (
               <Grid
                  item
                  className={classes.ingredient}
                  key={`ingredients-${i}`}
               >
                  <Typography component="span" className={classes.span}>
                     {`${ingredient.item} `}
                     <Typography
                        component="span"
                        className={classes.unit}
                        style={{ fontWeight: 600 }}
                     >
                        {ingredient.amount}
                        {ingredient.amount ? ingredient.unit : ''}
                     </Typography>
                  </Typography>
               </Grid>
            )
         })}
      </>
   )
}

export default Ingredients
