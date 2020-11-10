import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChange } from "./redux/auth/actions";
import "./App.css";

import AppRoutes from "./main/routes";
import { useHistory } from "react-router-dom";
import { routes } from "./main/routes/constants";
import SnackBar from "./common/components/snack-bar";

import { lightTheme } from "./main/theme/light";
import { darkTheme } from "./main/theme/dark";
import { ThemeProvider } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: any) => state.ui);
  const history = useHistory();

  useEffect(() => {
    dispatch(onAuthStateChange(history, routes.home));
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={!theme ? { ...lightTheme } : { ...darkTheme }}>
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
