import { Dispatch } from "react";
import * as api from "../../../../api/food-tracker";
import * as types from "../constants";
import * as apiUtils from "../../../../api/utils";
import * as _ from "lodash";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { ParsedDateRange } from "../../../../main/types";
export const setDateRange = (dateRange: DateRange) => (
  dispatch: Dispatch<any>
) => {
  dispatch({
    type: types.SET_DATE_RANGE,
    payload: dateRange
  });
};

export const fetchMeals = (dateRange: ParsedDateRange) => (
  dispatch: Dispatch<any>,
  getStore: any
) => {
  const { currentUser } = getStore().auth;
  dispatch({
    type: types.GET_MEALS
  });

  if (!dateRange?.startAt || !dateRange?.endAt) return;

  api
    .getMeals(currentUser, dateRange.startAt, dateRange.endAt)
    .then((listener) => {
      listener.onSnapshot((snapshot: any) => {
        const tempArr = snapshot.docs.map(apiUtils.makeDoc);
        const docs = _.groupBy(tempArr, "data.meal.date");
        dispatch({
          type: types.GET_MEALS_SUCCESS,
          payload: Object.entries(docs)
        });
      });
    })
    .catch((err) => {
      dispatch({
        type: types.REQUEST_ERR,
        payload: err
      });
    });
};

export const addMeal = (meal: any) => (
  dispatch: Dispatch<any>,
  getStore: any
) => {
  const { currentUser } = getStore().auth;

  dispatch({
    type: types.ADD_MEAL
  });

  api
    .postMeal(meal, currentUser)
    .then(() => {
      dispatch({
        type: types.ADD_MEAL_SUCCESS
      });
    })
    .catch((err) => {
      dispatch({
        type: types.REQUEST_ERR,
        payload: err
      });
      console.log(err);
    });
};
