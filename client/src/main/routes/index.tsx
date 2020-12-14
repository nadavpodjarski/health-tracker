import React, { useEffect, useState } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'
import { paths } from './routes.config'

import { useSelector } from 'react-redux'

import InitSpinner from '../../common/components/initialize-spinner'
import PrivateRoute from '../../common/components/private-route'

import Drawer from '../../modules/drawer'
import Home from '../../modules/home'

const AppRoutes = () => {
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>()
   const { currentUser, isInitializing } = useSelector((state) => state.auth)

   useEffect(() => {
      setIsLoggedIn(!!currentUser)
   }, [currentUser])

   return (
      <>
         {isInitializing ? (
            <InitSpinner />
         ) : (
            <Switch>
               <Route path={paths.HOME} component={Home} />
               <PrivateRoute
                  redirectTo={paths.HOME}
                  isLoggedIn={isLoggedIn}
                  component={Drawer}
                  path={paths.DRAWER}
               />
               <Redirect to={paths.DRAWER} />
            </Switch>
         )}
      </>
   )
}

export default AppRoutes
