import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./constants";

const FoodTracker = lazy(() => import("../../modules/food-tracker"));
const Profile = lazy(() => import("../../modules/profile"));
const SportTracker = lazy(() => import("../../modules/sport-tracker"));

const MenuRoutes = () => {
  return (
    <Suspense fallback={""}>
      <Switch>
        <Route path={routes.profile} component={Profile} />

        <Route path={routes.foodTracker} component={FoodTracker} />
        <Route path={routes.sportTracker} component={SportTracker} />

        {/*Default Route*/}
        <Route>
          <Redirect to={routes.foodTracker} />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default MenuRoutes;
