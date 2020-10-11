import React, { useEffect } from "react";
import firebase from './main/firebase'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/auth/actions'
import "./App.css";

import AppRoutes from "./main/routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user));
      }
    })

  }, [])


  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
