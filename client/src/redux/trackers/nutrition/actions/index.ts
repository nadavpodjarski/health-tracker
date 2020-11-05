import { Dispatch } from "react";

import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { ParsedDateRange } from "../../../../types";
import { Meal } from "../../../../types/nutrition";

import * as utils from "../../../../utilities/nutrition";
import * as uiActions from "../../../ui/actions";
import * as api from "../../../../api/nutrition";
import * as types from "../constants";

const createGetMeals = () => {
  return {
    type: types.GET_MEALS
  };
};

const createAddMeal = () => {
  return {
    type: types.ADD_MEAL
  };
};

const createDeleteMeal = () => {
  return {
    type: types.DELETE_MEAL
  };
};

const createEditMeal = () => {
  return {
    type: types.EDIT_MEAL
  };
};

const addMealSuccess = () => {
  return {
    type: types.ADD_MEAL_SUCCESS
  };
};

const editMealSuccess = () => {
  return {
    type: types.EDIT_MEAL_SUCCESS
  };
};

const getMealsSuccess = (data: any) => {
  return {
    type: types.GET_MEALS_SUCCESS,
    payload: data
  };
};

const deleteMealSuccess = () => {
  return {
    type: types.DELETE_MEAL_SUCCESS
  };
};

const requestErr = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch(uiActions.setSnackBar({ type: "error", msg: err }));
  dispatch({
    type: types.REQUEST_ERR,
    payload: err
  });
};

// DELETE MEAL
export const deleteMeal = (docId: string) => async (
  dispatch: Dispatch<any>,
  getStore: any
) => {
  const { dateRange } = getStore().nutrition;
  try {
    dispatch(createDeleteMeal());
    const res = await api.deleteMeal(docId);
    dispatch(deleteMealSuccess());

    dispatch(
      uiActions.setSnackBar({
        type: "info",
        msg: res.data
      })
    );

    dispatch(fetchMeals(dateRange));
  } catch (err) {
    dispatch(requestErr(err.response?.data));
  }
};

// SET DATE RANGE
export const setDateRange = (dateRange: DateRange) => (
  dispatch: Dispatch<any>
) => {
  dispatch({
    type: types.SET_DATE_RANGE,
    payload: dateRange
  });
};

// GET MEALS
export const fetchMeals = (dateRange: ParsedDateRange) => async (
  dispatch: Dispatch<any>
) => {
  if (!dateRange.startAt || !dateRange.endAt) return;

  try {
    dispatch(createGetMeals());
    const res = await api.getMeals(dateRange.startAt, dateRange.endAt);
    dispatch(getMealsSuccess(res));
  } catch (err) {
    dispatch(requestErr(err.response?.data));
  }
};

// ADD MEAL
export const addMeal = (meal: Meal) => async (
  dispatch: Dispatch<any>,
  getStore: any
) => {
  const { dateRange } = getStore().nutrition;

  // Validate Meal
  try {
    utils.isValidMeal(meal);
  } catch (err) {
    throw err;
  }

  // POST Meal
  try {
    dispatch(createAddMeal());
    const res = await api.postMeal(meal);
    dispatch(addMealSuccess());

    if (meal.date >= dateRange.startAt && meal.date <= dateRange.endAt) {
      dispatch(fetchMeals(dateRange));
    }

    dispatch(
      uiActions.setSnackBar({
        type: "success",
        msg: res.data
      })
    );
  } catch (err) {
    dispatch(requestErr(err.response?.data));
  }
};

// EDIT MEAL
export const editMeal = (meal: Meal, docId: string) => async (
  dispatch: Dispatch<any>,
  getStore: any
) => {
  const { dateRange } = getStore().nutrition;

  try {
    utils.isValidMeal(meal);
  } catch (err) {
    throw err;
  }

  try {
    dispatch(createEditMeal());
    const res = await api.putMeal(meal, docId);
    dispatch(editMealSuccess());
    dispatch(
      uiActions.setSnackBar({
        type: "success",
        msg: res.data
      })
    );
    dispatch(fetchMeals(dateRange));
  } catch (err) {
    dispatch(requestErr(err.response?.data));
  }
};
