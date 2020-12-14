import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChange } from './redux/auth/actions'

import './App.css'

import AppRoutes from './main/routes'
import SnackBar from './common/components/snack-bar'

import { useHistory } from 'react-router-dom'
import { paths } from './main/routes/routes.config'

import { getTheme } from './main/theme/setCurrentTheme'
import { ThemeProvider } from '@material-ui/core'

function App() {
   const dispatch = useDispatch()
   const history = useHistory()

   const { theme } = useSelector((state) => state.ui)

   useEffect(() => {
      dispatch(
         onAuthStateChange(() => {
            history.push(paths.DRAWER)
         })
      )
      // eslint-disable-next-line
   }, [])

   return (
      <>
         <ThemeProvider theme={getTheme(theme)}>
            <div className="App">
               <AppRoutes />
               <SnackBar
                  position={{ vertical: 'bottom', horizontal: 'left' }}
                  duration={1500}
               />
            </div>
         </ThemeProvider>
      </>
   )
}
export default App
