import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { routes } from '../../main/routes/constants'

import { useSelector } from 'react-redux'

import InitSpinner from '../../common/components/initialize-spinner'
import PrivateRoute from '../../common/components/private-route'

const Drawer = lazy(() => import('../../modules/drawer'))
const Home = lazy(() => import('../../modules/home'))

const AppRoutes = () => {
   const { currentUser, isInitializing } = useSelector((state) => state.auth)

   return (
      <>
         {!isInitializing ? (
            <Suspense fallback={<InitSpinner />}>
               <Switch>
                  <Route exact path={routes.home} component={Home} />
                  <PrivateRoute
                     redirectTo={routes.home}
                     isLoggedIn={!!currentUser}
                     path={routes.drawer}
                     component={Drawer}
                  />
                  {/*Default Route*/}
                  <Route>
                     <Redirect to={routes.drawer} />
                  </Route>
               </Switch>
            </Suspense>
         ) : (
            <InitSpinner />
         )}
      </>
   )
}

export default AppRoutes
