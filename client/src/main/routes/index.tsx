import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const FoodTracker = lazy(() => import("../../modules/food-tracker"));
const Profile = lazy(() => import("../../modules/profile"));

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={"Loading..."}>
          <Route path="/food-tracker" component={FoodTracker} />
          <Route path="/profile" component={Profile} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;
