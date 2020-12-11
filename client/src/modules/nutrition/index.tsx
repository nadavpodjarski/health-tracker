import React, { useEffect } from 'react'

import AddMealModalContent from './components/modals/add-meal-modal-content'
import MealsList from './components/meal-list'
import FilterOptions from './components/filter-options'

import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Box, Button, Typography, Grid } from '@material-ui/core'
import { useModal } from '../../common/hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'

import * as nutritionActions from '../../redux/trackers/nutrition/actions'
import * as UIActions from '../../redux/ui/actions'
import * as nutritionUtils from '../../utilities/nutrition'

import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'
import { Meal } from '../../types/nutrition'

const useStyles = makeStyles((theme) =>
   createStyles({
      moduleRoot: {
         display: 'flex',
         flex: 1,
         minHeight: 0,
         justifyContent: 'center',
         width: '100%'
      },
      innerModule: {
         width: '100%',
         maxWidth: 1200,
         height: '100%',
         display: 'flex',
         flexDirection: 'column',
         position: 'relative'
      },
      openModalButtonWrapper: {
         display: 'flex',
         alignItems: 'center',
         width: '100%',
         padding: '24px 0',
         [theme.breakpoints.down('sm')]: {
            padding: '12px 0'
         }
      },
      openModalButton: {
         fontSize: '16px',
         background: theme.palette.primary.main,
         color: 'white',
         '&:hover': {
            background: theme.palette.primary.main
         },
         [theme.breakpoints.down('sm')]: {
            fontSize: '16px'
         }
      },
      header: {
         textAlign: 'left',
         width: '100%',
         padding: '16px 0',
         [theme.breakpoints.down('md')]: {
            padding: '16px 12px'
         }
      }
   })
)

const Nutrition = () => {
   const { isLoading, meals, dateRange } = useSelector(
      (state) => state.nutrition
   )
   const [addMealModalToggler, AddMealModal] = useModal()

   const classes = useStyles()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(nutritionActions.fetchMeals(dateRange))
      //eslint-disable-next-line
   }, [dateRange])

   useEffect(() => {
      dispatch(UIActions.setModuleTtiel('Nutrition'))
      return () => {
         dispatch(nutritionActions.clearMealsState())
      }
      //eslint-disable-next-line
   }, [])

   const onDateRangeChange = (date: DateRange) => {
      date[0] = date[0] || new Date()
      date[1] = date[1] || new Date()
      dispatch(nutritionActions.setMealsDateRange(date))
   }

   const onAddMeal = async (meal: Meal) => {
      return dispatch(nutritionActions.addMeal(meal))
   }

   const onDeleteMeal = async (docId: string) => {
      return dispatch(nutritionActions.deleteMeal(docId))
   }

   const onEditMeal = async (meal: Meal, docId: string) => {
      return dispatch(nutritionActions.editMeal(meal, docId))
   }

   return (
      <div className={classes.moduleRoot}>
         <Box className={classes.innerModule}>
            {/*Header*/}
            <Box className={classes.header}>
               <Grid container>
                  <Grid item xs={12} md={7}>
                     <Typography
                        style={{
                           padding: '12px 0',
                           fontSize: '14px',
                           lineHeight: 1.7
                        }}
                     >
                        Add, Edit and Delete your meals contents. Take in
                        consideration that the more detailed the food ingredient
                        that you will type in, The easier it will be for you to
                        track your food intolerance, and to mainatin a healthier
                        mind and body.
                     </Typography>
                  </Grid>
                  <Grid
                     item
                     container
                     xs={12}
                     md={5}
                     alignItems="center"
                     justify="flex-end"
                  >
                     <Button
                        onClick={addMealModalToggler}
                        className={classes.openModalButton}
                     >
                        Add Meal
                     </Button>
                  </Grid>
               </Grid>
               <FilterOptions {...{ onDateRangeChange, dateRange }} />
            </Box>

            <MealsList
               onCopyMeal={onAddMeal}
               onDeleteMeal={onDeleteMeal}
               onEditMeal={onEditMeal}
               isLoading={isLoading}
               meals={meals}
            />
         </Box>

         <AddMealModal width={1200}>
            <AddMealModalContent
               modalToggler={addMealModalToggler}
               onAddMeal={onAddMeal}
               meal={nutritionUtils.makeNewMeal()}
            />
         </AddMealModal>
      </div>
   )
}

export default Nutrition
