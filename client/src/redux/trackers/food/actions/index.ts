import { Dispatch } from "react";
import * as api from "../../../../api/food-tracker";
import * as types from "../constants";
import * as _ from "lodash";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { ParsedDateRange } from "../../../../types";
import * as uiActions from "../../../ui/actions";
import { Meal } from "../../../../types/food";

export const deleteMeal = (docId: string) => async (
  dispatch: Dispatch<any>,
  getStore: any
) => {
  const { dateRange } = getStore().food;
  dispatch({
    type: types.DELETE_MEAL
  });
  try {
    const res = await api.deleteMeal(docId);
    dispatch({
      type: types.DELETE_MEAL_SUCCESS
    });
    dispatch(
      uiActions.setSnackBar({
        type: "info",
        msg: res.data
      })
    );
    dispatch(fetchMeals(dateRange));
  } catch (err) {
    dispatch({
      type: types.REQUEST_ERR,
      payload: err.message
    });
    dispatch(uiActions.setSnackBar({ type: "error", msg: err.msg }));
  }
};

export const setDateRange = (dateRange: DateRange) => (
  dispatch: Dispatch<any>
) => {
  dispatch({
    type: types.SET_DATE_RANGE,
    payload: dateRange
  });
};

export const fetchMeals = (dateRange: ParsedDateRange) => async (
  dispatch: Dispatch<any>
) => {
  dispatch({
    type: types.GET_MEALS
  });

  if (!dateRange.startAt || !dateRange.endAt) return;

  try {
    const res = await api.getMeals(dateRange.startAt, dateRange.endAt);
    dispatch({
      type: types.GET_MEALS_SUCCESS,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: types.REQUEST_ERR,
      payload: err.message
    });
    dispatch(uiActions.setSnackBar({ type: "error", msg: err.message }));
  }
};

export const addMeal = (meal: Meal) => async (
  dispatch: Dispatch<any>,
  getStore: any
) => {
  const { dateRange } = getStore().food;
  dispatch({
    type: types.ADD_MEAL
  });

  try {
    const res = await api.postMeal(meal);
    dispatch({
      type: types.ADD_MEAL_SUCCESS
    });
    dispatch(
      uiActions.setSnackBar({
        type: "success",
        msg: res.data
      })
    );
    dispatch(fetchMeals(dateRange));
  } catch (err) {
    dispatch({
      type: types.REQUEST_ERR,
      payload: err
    });
    uiActions.setSnackBar({
      type: "error",
      msg: err
    });
  }
};
