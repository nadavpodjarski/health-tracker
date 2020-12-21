import React, { useEffect } from 'react'

import MealsList from './meal-list'
import FilterOptions from './filter-options'
import AddMealButton from './add-meal-button'
import Intro from './intro'

import { Box, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { useLayoutStyles } from './styles/layout'

import * as nutritionActions from '../../../redux/nutrition/actions'
import * as uiActions from '../../../redux/ui/actions'

import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'
import { Meal, MealDoc } from '../../../types/nutrition'

const Nutrition = () => {
   const { isLoading, meals, dateRange } = useSelector(
      (state) => state.nutrition
   )

   const classes = useLayoutStyles()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(nutritionActions.fetchMeals(dateRange))
      //eslint-disable-next-line
   }, [dateRange])

   useEffect(() => {
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

   const onAddMealHandler = async () => {
      dispatch(uiActions.setModal('add-meal', { width: 1200 }))
   }

   const onCopyMealHandler = async (meal: Meal) => {
      dispatch(uiActions.setModal('add-meal', { props: { meal }, width: 1200 }))
   }

   const onDeleteMealHandler = async (docId: string) => {
      dispatch(
         uiActions.setModal('delete-meal', {
            props: {
               docId
            },
            width: 500
         })
      )
   }

   const onEditMealHandler = async (mealDoc: MealDoc) => {
      dispatch(
         uiActions.setModal('edit-meal', {
            props: {
               mealDoc
            },
            width: 1200
         })
      )
   }

   return (
      <Box className={classes.moduleRoot}>
         <Box className={classes.innerModule}>
            {/*Header*/}
            <Box className={classes.header}>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                     <Intro />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <AddMealButton
                        className={classes.addMealButton}
                        onClick={onAddMealHandler}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <FilterOptions
                        onDateRangeChange={onDateRangeChange}
                        dateRange={dateRange}
                     />
                  </Grid>
               </Grid>
            </Box>

            <MealsList
               onCopyMeal={onCopyMealHandler}
               onEditMeal={onEditMealHandler}
               onDeleteMeal={onDeleteMealHandler}
               isLoading={isLoading}
               meals={meals}
            />
         </Box>
      </Box>
   )
}

export default Nutrition
