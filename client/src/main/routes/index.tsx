import React, { lazy, Suspense } from "react";
import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { routes } from "../../main/routes/constants";
import PrivateRoute from "../../common/components/private-route";


import { useSelector } from 'react-redux'
import Loader from '../../common/components/loader'

const SignIn = lazy(() => import('../../modules/sing-in'))
const Home = lazy(() => import('../../modules/home'))

const AppRoutes = () => {

  const { currentUser, isLoading } = useSelector((state: any) => state.auth)

  return (
    <>
      {!isLoading ?
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
        : <Loader />}
    </>


  );
};

export default AppRoutes;
