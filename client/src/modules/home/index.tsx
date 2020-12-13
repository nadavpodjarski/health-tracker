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
            <Grid container style={{ maxWidth: 1200, flex: 1 }}>
               <Grid item xs={12} md={4}>
                  <Intro />
               </Grid>
               <Grid
                  item
                  container
                  justify="flex-end"
                  alignItems="flex-end"
                  xs={12}
                  md={8}
               >
                  <LobbyImage width={800} height={600} />
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
