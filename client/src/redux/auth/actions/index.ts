import * as types from "../types";
import { useFirebaseAuth } from '../../../main/firebase/useFirebaseAuth'
import { Dispatch } from "react";


const { firebaseAuth } = useFirebaseAuth()


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

export const logout = () => {
  firebaseAuth().signOut()
}

export const onAuthStateChange = (history: any, route: string) => (dispatch: Dispatch<any>) => {
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      dispatch(userLoggedIn(user))
      history.push(route)
    } else {
      dispatch(userLoggedOut())
    }
  })
}





