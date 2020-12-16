import React, { FC } from 'react'
import { ListItem, Grid, makeStyles, Box, Typography } from '@material-ui/core'

import Type from './type'
import Ingredients from './ingredients'
import Time from './time'
import ListActionButtons from './action-buttons'
import Comments from './comments'

import { MealDoc, Meal } from '../../../../../types/nutrition'

const useStyles = makeStyles((theme) => ({
   root: {
      background: theme.palette.background.paper,
      margin: '6px 0',
      boxShadow: theme.shadows[0],
      borderRadius: '4px',
      border: `1px solid ${theme.palette.divider}`
   },
   actionButtonWrapper: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      padding: '8px 8px'
   }
}))

const MealListItem: FC<{
   item: MealDoc
   setDeleteMeal: (docId: string) => void
   setEditMeal: (item: MealDoc) => void
   setCopyMeal: (meal: Meal) => void
}> = ({ item, setDeleteMeal, setEditMeal, setCopyMeal }) => {
   const classes = useStyles()

   return (
      <Box className={classes.root}>
         <ListItem
            key={`item-${item.id}`}
            style={{
               padding: '16px 16px'
            }}
            component={Grid}
            container
         >
            <Grid item xs={11}>
               <Box display="inline-block">
                  <Type type={item.meal.type} />
                  <Typography
                     component="span"
                     color="textSecondary"
                     style={{ margin: '0 5px', fontSize: '12px' }}
                  >
                     at
                  </Typography>
                  <Time time={item.meal.date} />
               </Box>
            </Grid>

            <Grid
               item
               container
               xs={12}
               spacing={1}
               style={{ whiteSpace: 'nowrap', marginTop: '6px' }}
            >
               <Ingredients ingredients={item.meal.ingredients} />
            </Grid>

            <Box className={classes.actionButtonWrapper}>
               {item.meal.comments ? (
                  <Comments comments={item.meal.comments} />
               ) : (
                  ''
               )}
               <ListActionButtons
                  deleteHandler={() => setDeleteMeal(item.id)}
                  editHandler={() => setEditMeal(item)}
                  copyHanlder={() => setCopyMeal(item.meal)}
               />
            </Box>
         </ListItem>
      </Box>
   )
}

export default MealListItem
