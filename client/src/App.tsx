import React, { useEffect } from "react";
import firebase from './main/firebase'
import { useDispatch } from 'react-redux'
import { userLoggedIn, userLoggedOut } from './redux/auth/actions'
import "./App.css";

import AppRoutes from "./main/routes";
import { useHistory } from 'react-router-dom'
import { routes } from "./main/routes/constants";



function App() {
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {

    // firebase auth state change handler
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(userLoggedIn(user))
        history.push(routes.home)
      } else {
        dispatch(userLoggedOut())
      }
    })
  }, [])

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}
;
export default App;
