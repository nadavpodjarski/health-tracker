import * as types from "../types";

const initialState = {
  currentUser: null,
  isLoading: true
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false
      }
    case types.USER_LOGOUT:
      return {
        ...state,
        currentUser: null,
        isLoading: false
      }
    default:
      return state;
  }
};
