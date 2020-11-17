import React, { lazy, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { routes } from "../../main/routes/constants";
import PrivateRoute from "../../common/components/private-route";

import { useSelector } from "react-redux";
import { IStore } from "../../types/redux";
import InitSpinner from "../../common/components/initialize-spinner";

const SignIn = lazy(() => import("../../modules/sign-in"));
const Home = lazy(() => import("../../modules/home"));

const AppRoutes = () => {
  const { currentUser, isInitializing } = useSelector(
    (state: IStore) => state.auth
  );

  return (
    <>
      {!isInitializing ? (
        <Suspense fallback="">
          <Switch>
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
        </Suspense>
      ) : (
        <InitSpinner />
      )}
    </>
  );
};

export default AppRoutes;
