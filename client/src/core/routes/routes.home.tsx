import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { homePaths } from './routes.config'

import About from '../../modules/home/about'
import Entry from '../../modules/home/entry'

const HomeRoutes = () => {
   return (
      <Switch>
         <Route exact path={homePaths.HOME} component={Entry} />
         <Route path={homePaths.ABOUT} component={About} />
         <Route>
            <Redirect to={homePaths.HOME} />
         </Route>
      </Switch>
   )
}

export default HomeRoutes
