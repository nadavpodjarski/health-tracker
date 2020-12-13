import React from 'react'
import { makeStyles, Theme, Grid, Box } from '@material-ui/core'

import Intro from './intro'
import LoginForm from './login-form'
import Header from './header'
import LobbyImage from './lobby-image'

import { useModal } from '../../common/hooks/useModal'

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
            <Grid
               container
               justify="space-between"
               style={{ maxWidth: 1200, height: '100%' }}
            >
               <Grid item xs={12} md={4}>
                  <Intro />
               </Grid>
               <Grid item xs={12} md={8}>
                  <Box
                     height="100%"
                     display="flex"
                     alignItems="flex-end"
                     justifyContent="flex-end"
                  >
                     <LobbyImage width={800} height={600} />
                  </Box>
               </Grid>
            </Grid>

            <LoginFormModal>
               <LoginForm />
            </LoginFormModal>
         </Box>
      </ThemeProvider>
   )
}

export default Home
