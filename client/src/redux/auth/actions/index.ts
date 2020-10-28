import * as types from "../constants";
import { useFirebaseAuth } from "../../../main/firebase/useFirebaseAuth";
import { Dispatch } from "react";
import * as api from "../../../api/users";
import * as apiUtils from "../../../utilities/api";
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
  apiUtils.removeAuthToken();
};

export const onAuthStateChange = (history: any, route: string) => (
  dispatch: Dispatch<any>
) => {
  firebaseAuth().onAuthStateChanged(async (user) => {
    if (user) {
      try {
        const token = await user.getIdToken();
        const parsedUser = await api.addUser(token);
        dispatch(userLoggedIn(parsedUser.data));
        history.push(route);
      } catch (err) {
        console.log(err);
      }
    } else {
      dispatch(userLoggedOut());
    }
  });
};
