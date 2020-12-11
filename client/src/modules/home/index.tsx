import React from 'react'
import { makeStyles, Theme, Grid } from '@material-ui/core'

import Intro from './components/intro'
import LoginForm from './components/login-form'

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      background: 'white',
      minHeight: '100%'
   },
   intro: {
      minHeight: '100%',
      background: 'rgba(0,0,0,0.7)',
      padding: '16px',
      textAlign: 'left',
      color: 'white'
   },
   loginForm: {
      background: 'white',
      [theme.breakpoints.down('sm')]: {
         width: '100%',
         minWidth: 0,
         minHeight: '100vh'
      }
   }
}))

const Home = () => {
   const classes = useStyles()

   return (
      <>
         {
            <Grid container className={classes.root}>
               <Grid item xs={12} md={8} className={classes.intro}>
                  <Intro />
               </Grid>
               {/*Login Form*/}
               <Grid
                  item
                  container
                  xs={12}
                  md={4}
                  alignItems="center"
                  justify="center"
                  className={classes.loginForm}
               >
                  <LoginForm />
               </Grid>
            </Grid>
         }
      </>
   )
}

export default Home
