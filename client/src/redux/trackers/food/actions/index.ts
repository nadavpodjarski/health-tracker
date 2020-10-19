import { Dispatch } from "react";
import * as api from "../../../../api/food-tracker";
import * as types from "../types";

export const setStartTime = (time: string | number) => (
  dispatch: Dispatch<any>
) => {
  dispatch({
    type: types.SET_START_AT,
    payload: time
  });
};

export const setEndTime = (time: string | number) => (
  dispatch: Dispatch<any>
) => {
  dispatch({
    type: types.SET_END_AT,
    payload: time
  });
};

export const fetchAllMeals = () => (dispatch: Dispatch<any>, getStore: any) => {
  const { currentUser } = getStore().auth;
  const { startAt, endAt } = getStore().trackers.food;

  dispatch({
    type: types.GET_MEALS
  });

  api
    .getMeals(currentUser, startAt, endAt)
    .then((listener) => {
      listener.onSnapshot((snapshot: any) => {
        const docs = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          data: doc.data()
        }));
        dispatch({
          type: types.GET_MEALS_SUCCESS,
          payload: docs
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
