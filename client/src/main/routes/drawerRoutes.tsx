import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { routes } from "./constants";

import Loader from "../../common/components/loader";

const Nutrition = lazy(() => import("../../modules/nutrition"));
const Symptoms = lazy(() => import("../../modules/symptoms"));
const Dashboard = lazy(() => import("../../modules/dashboard"));

const MenuRoutes = () => {
  const match = useRouteMatch();

  return (
    <Suspense fallback={<Loader title="Loading" />}>
      <Switch>
        <Route path={match.path + routes.nutrition} component={Nutrition} />
        <Route path={match.path + routes.symptoms} component={Symptoms} />
        <Route path={match.path + routes.dashboard} component={Dashboard} />
        {/*Default Route*/}
        <Route>
          <Redirect to={match.path + routes.nutrition} />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default MenuRoutes;
