import React, { useEffect } from 'react'

import AddMealModalContent from './modals/add-meal-modal'
import MealsList from './meal-list'
import FilterOptions from './filter-options'
import AddMealButton from './add-meal-button'
import Intro from './intro'

import { Box, Grid } from '@material-ui/core'
import { useModal } from '../../common/hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'

import { useLayoutStyles } from './styles/layout'

import * as nutritionActions from '../../redux/trackers/nutrition/actions'
import * as nutritionUtils from '../../utilities/nutrition'

import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'
import { Meal } from '../../types/nutrition'

const Nutrition = () => {
   const { isLoading, meals, dateRange } = useSelector(
      (state) => state.nutrition
   )
   const [addMealModalToggler, AddMealModal] = useModal()

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
                        className={classes.openModalButton}
                        onClick={addMealModalToggler}
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
      </Box>
   )
}

export default Nutrition
