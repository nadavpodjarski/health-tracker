import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChange } from "./redux/auth/actions";
import "./App.css";

import AppRoutes from "./main/routes";
import SnackBar from "./common/components/snack-bar";

import { useHistory } from "react-router-dom";
import { routes } from "./main/routes/constants";

import { getTheme } from "./main/theme/setCurrentTheme";
import { ThemeProvider } from "@material-ui/core";

import { IStore } from "./types/redux";

function App() {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: IStore) => state.ui);
  const history = useHistory();

  useEffect(() => {
    dispatch(onAuthStateChange(history, routes.home));
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <div className="App">
        <AppRoutes />
        <SnackBar
          position={{ vertical: "bottom", horizontal: "left" }}
          duration={3000}
        />
      </div>
    </ThemeProvider>
  );
}
export default App;
