import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./constants";
import Loader from "../../common/components/loader";
const Nutrition = lazy(() => import("../../modules/nutrition"));
const Profile = lazy(() => import("../../modules/profile"));
const Symptoms = lazy(() => import("../../modules/symptoms"));

const MenuRoutes = () => {
  return (
    <Suspense fallback={<Loader title="Loading" />}>
      <Switch>
        <Route path={routes.profile} component={Profile} />

        <Route path={routes.nutrition} component={Nutrition} />
        <Route path={routes.symptoms} component={Symptoms} />

        {/*Default Route*/}
        <Route>
          <Redirect to={routes.nutrition} />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default MenuRoutes;
