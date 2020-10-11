import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import firebase from '../../../main/firebase'

const PrivateRoute: FC<{ component: FC; path: string | string[]; isLoggedIn: boolean, redirectTo: string }> = (
  { component, path, redirectTo, isLoggedIn },
  ...rest: any
) => {



  return isLoggedIn ? (
    <Route component={component} path={path} {...rest} />
  ) : (
      <Redirect to={redirectTo} />
    );
};

export default PrivateRoute;
