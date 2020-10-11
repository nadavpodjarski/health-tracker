import * as types from "../types";

export const setUser = (user: any) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};
