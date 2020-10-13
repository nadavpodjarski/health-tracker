import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { onAuthStateChange } from './redux/auth/actions'
import "./App.css";

import AppRoutes from "./main/routes";
import { useHistory } from 'react-router-dom'
import { routes } from "./main/routes/constants";



function App() {
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    dispatch(onAuthStateChange(history, routes.home))
  }, [])

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}
;
export default App;
