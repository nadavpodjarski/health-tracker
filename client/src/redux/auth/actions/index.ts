import * as types from "../constants";
import { useFirebaseAuth } from "../../../main/firebase/useFirebaseAuth";
import { Dispatch } from "react";
import * as api from "../../../api/users";

const { firebaseAuth } = useFirebaseAuth();

export const userLoggedIn = (user: any) => {
  return {
    type: types.USER_LOGIN,
    payload: user
  };
};

export const userLoggedOut = () => {
  return {
    type: types.USER_LOGOUT
  };
};

export const logout = () => {
  firebaseAuth().signOut();
};

export const onAuthStateChange = (history: any, route: string) => (
  dispatch: Dispatch<any>
) => {
  firebaseAuth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(userLoggedIn(user));
      api.addUser(user);
      history.push(route);
    } else {
      dispatch(userLoggedOut());
    }
  });
};
