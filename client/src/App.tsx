import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChange } from "./redux/auth/actions";
import "./App.css";

import AppRoutes from "./main/routes";
import { useHistory } from "react-router-dom";
import { routes } from "./main/routes/constants";
import SnackBar from "./common/components/snack-bar";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(onAuthStateChange(history, routes.home));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <AppRoutes />
      <SnackBar
        position={{ vertical: "bottom", horizontal: "left" }}
        duration={3000}
      />
    </div>
  );
}
export default App;
