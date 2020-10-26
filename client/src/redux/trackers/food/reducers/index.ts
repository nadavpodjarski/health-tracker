import * as types from "../constants";
import * as appUtils from "../../../../utilities";
import { IFoodState, Action } from "../../../../types/redux";

const initialState = {
  meals: [],
  dateRange: appUtils.parseDateRange([new Date(), new Date()]),
  isLoading: false,
  err: null
};

export const foodTrackReducer = (
  state = initialState,
  action: Action
): IFoodState => {
  switch (action.type) {
    case types.DELETE_MEAL:
      return {
        ...state
      };
    case types.DELETE_MEAL_SUCCESS:
      return {
        ...state
      };
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
