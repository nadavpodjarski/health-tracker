import React, { useEffect } from 'react'

import AddMealModalContent from './components/modals/add-meal-modal-content'
import MealsList from './components/meal-list'
import FilterOptions from './components/filter-options'

import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Box, Button, Typography } from '@material-ui/core'
import { useModal } from '../../common/hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'

import * as nutritionActions from '../../redux/trackers/nutrition/actions'
import * as nutritionUtils from '../../utilities/nutrition'

import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'
import { IStore } from '../../types/redux'
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
         maxWidth: '1200px',
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
         fontSize: '20px',
         background: theme.palette.primary.main,
         color: 'white',
         '&:hover': {
            background: theme.palette.primary.main
         },
         [theme.breakpoints.down('sm')]: {
            fontSize: '16px'
         },
         boxShadow: theme.shadows[4]
      },
      header: {
         minHeight: 200,
         textAlign: 'left',
         width: '100%',
         padding: '16px 0',
         [theme.breakpoints.down('md')]: {
            padding: '16px 12px'
         }
      },
      title: {
         height: 100,
         display: 'flex',
         alignItems: 'center',
         [theme.breakpoints.down('sm')]: {
            height: 60
         }
      }
   })
)

const Nutrition = () => {
   const { isLoading, meals, dateRange } = useSelector(
      (state: IStore) => state.nutrition
   )
   const [addMealModalToggler, AddMealModal] = useModal()

   const classes = useStyles()
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
      <div className={classes.moduleRoot}>
         <Box className={classes.innerModule}>
            {/*Header*/}
            <Box className={classes.header}>
               <Box className={classes.title}>
                  <Typography variant="h3">Nutrition</Typography>
               </Box>
               <Box>
                  <Typography component="p" style={{ padding: '12px 0' }}>
                     This is your <strong>Food Tracker</strong>, Here you can
                     Add, Edit and Delete Meals...
                  </Typography>
               </Box>
               <Box className={classes.openModalButtonWrapper}>
                  <Button
                     onClick={addMealModalToggler}
                     className={classes.openModalButton}
                  >
                     Add Meal
                  </Button>
               </Box>
            </Box>
            {/*Open Modal Button*/}

            {/*Filter options*/}
            <FilterOptions {...{ onDateRangeChange, dateRange }} />

            {/*Food List*/}
            <MealsList
               onCopyMeal={onAddMeal}
               onDeleteMeal={onDeleteMeal}
               onEditMeal={onEditMeal}
               isLoading={isLoading}
               meals={meals}
            />
         </Box>
         {/*Add Meal Modal*/}
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
