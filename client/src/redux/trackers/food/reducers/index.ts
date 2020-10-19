import * as types from "../types";

const initialState = {
  meals: [],
  startAt: new Date(new Date().toLocaleDateString()).getTime(),
  endAt: new Date(
    new Date(new Date().getTime() + 86400000).toLocaleDateString()
  ).getTime(),
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
    case types.SET_START_AT:
      return {
        ...state,
        startAt: action.payload
      };
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
