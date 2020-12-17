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
   },
   content: {
      maxWidth: 1200,
      height: '100%'
   }
}))

const Home = () => {
   const classes = useStyles()

   const [loginFormModalToggler, LoginFormModal] = useLoginFormModal()

   return (
      <>
         <Box className={classes.root}>
            <Box className={classes.content}>
               <Box
                  display="flex"
                  flexDirection="column"
                  padding="0 16px"
                  minHeight="100%"
               >
                  <Navbar loginFormModalToggler={loginFormModalToggler} />
                  <HomeRoutes />
               </Box>
            </Box>
         </Box>
         <LoginFormModal />
      </>
   )
}

export default Home
