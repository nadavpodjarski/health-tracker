import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./constants";

const FoodTracker = lazy(() => import("../../modules/food-tracker"));
const Profile = lazy(() => import("../../modules/profile"));
const SportTracker = lazy(() => import("../../modules/sport-tracker"));

const MenuRoutes = () => {
  return (
    <Switch>
      <Suspense fallback={"Loading..."}>
        <Route path={routes.profile} component={Profile} />

        <Route path={routes.foodTracker} component={FoodTracker} />
        <Route path={routes.sportTracker} component={SportTracker} />

        {/*Default Route*/}
        <Route>
          <Redirect to={{ pathname: routes.foodTracker }} />
        </Route>
      </Suspense>
    </Switch>
  );
};

export default MenuRoutes;
