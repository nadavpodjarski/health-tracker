import * as api from "../../../../api/food-tracker";
import * as types from "../types";

export const fetchAllMeals = () => (dispatch: any, getStore: any) => {
  const { currentUser } = getStore().auth;
  dispatch({
    type: types.GET_MEALS,
  });
  api
    .getMeals(currentUser)
    .then((listener) => {
      listener.onSnapshot((snapshot: any) => {
        const docs = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          data: doc.data(),
        }));
        dispatch({
          type: types.GET_MEALS_SUCCESS,
          payload: docs,
        });
      });
    })
    .catch((err) => {
      dispatch({
        type: types.REQUEST_ERR,
        payload: err,
      });
    });
};

export const addMeal = (meal: any) => (dispatch: any, getStore: any) => {
  const { currentUser } = getStore().auth;
  dispatch({
    type: types.ADD_MEAL,
  });
  api
    .postMeal(meal, currentUser)
    .then(() => {
      dispatch({
        type: types.ADD_MEAL_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.REQUEST_ERR,
        payload: err,
      });
      console.log(err);
    });
};
