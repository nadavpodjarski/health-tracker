import * as types from "../types";

export const userLoggedIn = (user: any) => {
  return {
    type: types.USER_LOGIN,
    payload: user,
  };
};


export const userLoggedOut = () => {
  return {
    type: types.USER_LOGOUT
  }
}





