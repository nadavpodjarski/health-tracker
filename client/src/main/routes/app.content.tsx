import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { drawerRoutes, paths } from './routes.config'

const DrawerRoutes = () => {
   const defaultPath = paths.NUTRITION

   return (
      <Switch>
         {drawerRoutes.map((route) => {
            return <Route exact path={route.path} component={route.component} />
         })}
         <Route>
            <Redirect to={defaultPath} />
         </Route>
      </Switch>
   )
}

export default DrawerRoutes