import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { mainAppPaths } from './routes.config'

import Dashboard from '../../modules/main-app/dashboard'
import Symptoms from '../../modules/main-app/symptoms'
import Nutrition from '../../modules/main-app/nutrition'

const MainAppRoutes = () => {
   return (
      <Switch>
         <Route path={mainAppPaths.NUTRITION} component={Nutrition} />
         <Route path={mainAppPaths.DASHBOARD} component={Dashboard} />
         <Route path={mainAppPaths.SYMPTOMS} component={Symptoms} />
         <Route>
            <Redirect to={mainAppPaths.SYMPTOMS} />
         </Route>
      </Switch>
   )
}

export default MainAppRoutes
