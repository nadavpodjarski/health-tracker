import React from 'react'
import { makeStyles, Theme, Box } from '@material-ui/core'

import Navbar from './navbar'
import HomeRoutes from '../../core/routes/routes.home'
import { useLoginFormModal } from '../../common/hooks/useLoginModal'

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

   const [loginFormModalToggler, LoginFormModal] = useLoginFormModal()

   return (
      <>
         <Box className={classes.root}>
            <Navbar loginFormModalToggler={loginFormModalToggler} />
            <HomeRoutes />
         </Box>
         <LoginFormModal />
      </>
   )
}

export default Home
