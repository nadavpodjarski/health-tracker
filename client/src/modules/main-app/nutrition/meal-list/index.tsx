import React, { FC } from 'react'
import {
   List,
   ListSubheader,
   ListItem,
   makeStyles,
   Theme,
   Box,
   Typography
} from '@material-ui/core'

import Loader from '../../../../common/components/loader'

import MealListItem from './list-item'

import { Meal, Meals, MealDoc } from '../../../../types/nutrition'

import * as _ from 'lodash'

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      position: 'relative',
      overflowY: 'auto',
      flex: 1,
      minHeight: 0,
      scrollbarWidth: 'none',
      marginBottom: theme.spacing(1),
      maxWidth: '100%',
      '&::-webkit-scrollbar': {
         display: 'none'
      }
   },
   listSection: {
      backgroundColor: 'inherit',
      fontSize: '22px'
   },
   ul: {
      backgroundColor: 'inherit',
      padding: 0
   },
   subHeaderWrapper: {
      display: 'flex',
      justifyContent: 'center',
      padding: '5px 0'
   },
   subHeader: {
      background: theme.palette.background.paper,
      borderRadius: '50px',
      boxShadow: theme.shadows[3],
      padding: '0 10px',
      border: `2px solid ${theme.palette.primary.main}`,
      [theme.breakpoints.down('sm')]: {
         transform: 'scale(0.85)'
      },
      lineHeight: '32px',
      fontSize: '14px'
   }
}))

const MealsList: FC<{
   isLoading: boolean
   meals: Meals
   onCopyMeal: (meal: Meal) => Promise<any>
   onEditMeal: (mealDoc: MealDoc) => Promise<any>
   onDeleteMeal: (docId: string) => Promise<any>
}> = ({ isLoading, meals, onEditMeal, onCopyMeal, onDeleteMeal }) => {
   const classes = useStyles()

   const setDeleteMeal = (docId: string) => {
      onDeleteMeal(docId)
   }

   const setEditMeal = (mealDoc: MealDoc) => {
      onEditMeal(_.cloneDeep(mealDoc))
   }

   const setCopyMeal = (meal: Meal) => {
      const newMeal = _.cloneDeep(meal)
      newMeal.date = new Date()
      onCopyMeal(newMeal)
   }

   return (
      <List
         component={Box}
         className={classes.root}
         subheader={<li />}
         disablePadding
      >
         {!isLoading ? (
            meals.length ? (
               <>
                  {meals?.map((mealsByDate, i) => {
                     return (
                        <li
                           key={`section-${i}`}
                           className={classes.listSection}
                        >
                           <ul className={classes.ul}>
                              <ListSubheader
                                 className={classes.subHeaderWrapper}
                              >
                                 <Box className={classes.subHeader}>
                                    {mealsByDate._id}
                                 </Box>
                              </ListSubheader>
                              {mealsByDate.meals.map((item, i: number) => (
                                 <MealListItem
                                    key={`meal_list_item_${i}`}
                                    item={item}
                                    setDeleteMeal={setDeleteMeal}
                                    setEditMeal={setEditMeal}
                                    setCopyMeal={setCopyMeal}
                                 />
                              ))}
                           </ul>
                        </li>
                     )
                  })}
               </>
            ) : (
               <Box
                  height="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
               >
                  <Typography variant="h5">No Meals</Typography>
                  <Typography
                     style={{ fontSize: '16px' }}
                     color="textSecondary"
                  >
                     (Add New Meal To Your List)
                  </Typography>
               </Box>
            )
         ) : (
            <ListItem
               style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
            >
               <Loader title="Fetching Meals" withShadow />
            </ListItem>
         )}
      </List>
   )
}

export default MealsList
