import * as types from "../types";
import * as appUtils from "../../../../utilities";

const initialState = {
  meals: [],
  dateRange: appUtils.parseDateRange([new Date(), new Date()]),
  isLoading: false,
  err: null
};

export const foodTrackReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_MEALS:
      return {
        ...state,
        isLoading: true
      };
    case types.SET_DATE_RANGE: {
      return {
        ...state,
        dateRange: appUtils.parseDateRange(action.payload)
      };
    }
    case types.GET_MEALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meals: action.payload
      };
    case types.ADD_MEAL:
      return {
        ...state,
        isLoading: true
      };
    case types.ADD_MEAL_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.REQUEST_ERR:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    default:
      return state;
  }
};
