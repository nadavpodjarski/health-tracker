import React, { FC } from 'react'
import { Redirect, RouteProps, Route } from 'react-router-dom'
import { IPrivateRoute } from '../../../types'

const PrivateRoute: FC<IPrivateRoute & RouteProps> = ({
   redirectTo,
   isLoggedIn,
   ...rest
}) => {
   return isLoggedIn ? <Route {...rest} /> : <Redirect to={redirectTo} />
}

export default PrivateRoute
