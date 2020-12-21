import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { onUserLogIn } from './redux/auth/actions'

import { useHistory } from 'react-router-dom'

import { Route, Switch } from 'react-router-dom'
import { mainAppPaths, homePaths } from './core/routes/routes.config'

import InitSpinner from './common/components/initialize-spinner'
import PrivateRoute from './common/components/private-route'

import MainApp from './modules/main-app/'
import Home from './modules/home'

import { ThemeProvider } from '@material-ui/core'
import { lightTheme } from './core/theme/light'

import SnackBar from './common/components/snack-bar'
import './App.css'

function App() {
   const dispatch = useDispatch()
   const history = useHistory()

   const { currentUser, isInitializing } = useSelector((state) => state.auth)

   useEffect(() => {
      dispatch(
         onUserLogIn((user) => {
            history.push(mainAppPaths.MAIN_APP)
         })
      )
      // eslint-disable-next-line
   }, [])

   return (
      <ThemeProvider theme={lightTheme}>
         <div className="App">
            {isInitializing ? (
               <InitSpinner />
            ) : (
               <Switch>
                  <PrivateRoute
                     redirectTo={homePaths.HOME}
                     isLoggedIn={!!currentUser}
                     path={mainAppPaths.MAIN_APP}
                     component={MainApp}
                  />
                  <Route>
                     <Home />
                  </Route>
               </Switch>
            )}
         </div>
         <SnackBar
            position={{ vertical: 'bottom', horizontal: 'left' }}
            duration={1500}
         />
      </ThemeProvider>
   )
}

export default App
