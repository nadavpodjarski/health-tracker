import React, { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute: FC<{
  component: FC;
  path: string | string[];
  isLoggedIn: boolean;
  redirectTo: string;
}> = (
  { component: Component, path, redirectTo, isLoggedIn },
  { ...rest }: RouteProps
) => {
  return isLoggedIn ? (
    <Route component={Component} path={path} {...rest} />
  ) : (
    <Redirect to={redirectTo} />
  );
};

export default PrivateRoute;
