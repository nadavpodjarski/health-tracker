import * as types from "../types";
import firebase from '../../../main/firebase'
import { Dispatch } from "react";


export const userLoggedIn = (user: any) => {
  return {
    type: types.USER_LOGIN,
    payload: user,
  };
};

export const logout = () => {
  firebase.auth().signOut()
}

export const userLoggedOut = () => {
  return {
    type: types.USER_LOGOUT
  }
}

export const onAuthStateChange = (history: any, route: string) => (dispatch: Dispatch<any>) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(userLoggedIn(user))
      history.push(route)
    } else {
      dispatch(userLoggedOut())
    }
  })
}





