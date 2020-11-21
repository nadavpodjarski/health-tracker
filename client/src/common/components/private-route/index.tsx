import React, { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { IPrivateRoute } from '../../../types'

const PrivateRoute: FC<IPrivateRoute & RouteProps> = ({
   redirectTo,
   isLoggedIn,
   children,
   ...rest
}) => {
   return isLoggedIn ? <Route {...rest} /> : <Redirect to={redirectTo} />
}

export default PrivateRoute
