import { Dispatch } from 'react'

import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'
import { ParsedDateRange } from '../../../types'
import { Meal } from '../../../types/nutrition'

import * as uiActions from '../../ui/actions'
import * as api from '../../../api/nutrition'
import * as types from '../constants'

// DELETE MEAL
const createDeleteMeal = () => {
   return {
      type: types.DELETE_MEAL
   }
}

const deleteMealSuccess = (data: any) => (dispatch: Dispatch<any>) => {
   dispatch({
      type: types.DELETE_MEAL_SUCCESS,
      payload: data.docId
   })
   dispatch(uiActions.setSnackBar({ type: 'info', msg: data.message }))
}

export const deleteMeal = (docId: string) => async (
   dispatch: Dispatch<any>
) => {
   try {
      dispatch(createDeleteMeal())
      const res = await api.deleteMeal(docId)
      dispatch(deleteMealSuccess(res))
   } catch (err) {
      dispatch(requestErr(err.message))
   }
}

// SET DATE RANGE
export const setMealsDateRange = (dateRange: DateRange) => (
   dispatch: Dispatch<any>
) => {
   dispatch({
      type: types.SET_MELAS_DATE_RANGE,
      payload: dateRange
   })
}

// GET MEALS
const createGetMeals = () => {
   return {
      type: types.GET_MEALS
   }
}

const getMealsSuccess = (data: any) => {
   return {
      type: types.GET_MEALS_SUCCESS,
      payload: data
   }
}

export const fetchMeals = (dateRange: ParsedDateRange) => async (
   dispatch: Dispatch<any>
) => {
   if (!dateRange.startAt || !dateRange.endAt) return

   try {
      dispatch(createGetMeals())
      const res = await api.getMeals(dateRange.startAt, dateRange.endAt)
      dispatch(getMealsSuccess(res))
   } catch (err) {
      dispatch(requestErr(err.message))
   }
}

export const clearMealsState = () => {
   return {
      type: types.CLEAR_MEALS
   }
}

// ADD MEAL
const createAddMeal = () => {
   return {
      type: types.ADD_MEAL
   }
}

const addMealSuccess = (data: any) => (dispatch: Dispatch<any>) => {
   dispatch({
      type: types.ADD_MEAL_SUCCESS,
      payload: data.meal
   })
   dispatch(uiActions.setSnackBar({ type: 'success', msg: data.message }))
}

export const addMeal = (meal: Meal) => async (
   dispatch: Dispatch<any>,
   getStore: any
) => {
   try {
      dispatch(createAddMeal())
      const res = await api.postMeal(meal)
      dispatch(addMealSuccess(res))
   } catch (err) {
      dispatch(requestErr(err.message))
   }
}

// EDIT MEAL
const createEditMeal = () => {
   return {
      type: types.EDIT_MEAL
   }
}

const editMealSuccess = (data: any) => (dispatch: Dispatch<any>) => {
   dispatch({
      type: types.EDIT_MEAL_SUCCESS,
      payload: { docId: data.docId, meal: data.meal }
   })
   dispatch(uiActions.setSnackBar({ type: 'success', msg: data.message }))
}

export const editMeal = (meal: Meal, docId: string) => async (
   dispatch: Dispatch<any>
) => {
   try {
      dispatch(createEditMeal())
      const res = await api.putMeal(meal, docId)
      dispatch(editMealSuccess(res))
   } catch (err) {
      dispatch(requestErr(err.message))
   }
}

// ERROR HANDLER
const requestErr = (errMessage: any) => (dispatch: Dispatch<any>) => {
   if (typeof errMessage === 'string')
      dispatch(uiActions.setSnackBar({ type: 'error', msg: errMessage }))

   dispatch({
      type: types.REQUEST_ERR,
      payload: errMessage
   })
}
