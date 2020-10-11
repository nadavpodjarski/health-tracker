import * as types from "../types";

const initialState = {
  currentUser: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
