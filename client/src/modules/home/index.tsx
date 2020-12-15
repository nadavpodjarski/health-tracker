import React from 'react'
import { makeStyles, Theme, Grid, Box } from '@material-ui/core'

import LoginForm from './login-form'
import Header from './header'
import LandingPage from './lp'
import About from './about'

import { useModal } from '../../common/hooks/useModal'

import { Switch, Route } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core'
import { lightTheme } from '../../main/theme/light'

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      background: 'white',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center'
   },
   intro: {
      textAlign: 'left'
   },
   loginForm: {
      [theme.breakpoints.down('sm')]: {
         width: '100%',
         minWidth: 0
      }
   }
}))

const Home = () => {
   const classes = useStyles()

   const [loginFormModalToggler, LoginFormModal] = useModal()

   return (
      <ThemeProvider theme={lightTheme}>
         <Box className={classes.root}>
            <Header loginFormModalToggler={loginFormModalToggler} />
            <LandingPage />
            <LoginFormModal>
               <LoginForm />
            </LoginFormModal>
         </Box>
      </ThemeProvider>
   )
}

export default Home
