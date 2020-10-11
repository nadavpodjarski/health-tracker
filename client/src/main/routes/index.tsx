import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { routes } from "../../main/routes/constants";
import PrivateRoute from "../../common/components/private-route";

import Home from "../../modules/home";
import SignIn from "../../modules/sing-in";
import LandingPage from "../../modules/landing-page";

import { useSelector } from 'react-redux'


const AppRoutes = () => {

  const { currentUser } = useSelector((state: any) => state.auth)

  return (
    <Router>
      <Switch>
        <Route path={routes.landingPage} component={LandingPage} />
        <Route path={routes.signIn} component={SignIn} />

        {/*Private Route*/}
        <PrivateRoute
          redirectTo={routes.signIn}
          path={routes.home}
          component={Home}
          isLoggedIn={!!currentUser}
        />

        {/*Default Route*/}
        <Route>
          <Redirect to={routes.home} />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
