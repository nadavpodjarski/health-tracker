import React from 'react'
import { useFirebaseAuth } from '../../main/firebase/useFirebaseAuth'
import { makeStyles, Theme, Typography, Grid, Box } from '@material-ui/core'

import FacebookIcon from '../../resources/images/social-logos/facebook1.jpg'
import GoogleIcon from '../../resources/images/social-logos/google2.png'
import AppLogo from '../../resources/logo/ibd-logo.png'
import SocialLoginButton from './components/social-login-button'

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      background: 'white',
      height: '100%'
   },
   intro: {
      height: '100%',
      background: 'rgba(0,0,0,0.7)',
      padding: '16px'
   },
   form: {
      background: 'white',
      [theme.breakpoints.down('sm')]: {
         width: '100%',
         minWidth: 0
      }
   },
   socialButtonsContainer: {
      width: '350px',
      maxWidth: '80%',
      margin: '16px 0'
   }
}))

const Home = () => {
   const classes = useStyles()
   const { firebaseAuth } = useFirebaseAuth()

   const googleProvider = new firebaseAuth.GoogleAuthProvider()
   const faceBookProvider = new firebaseAuth.FacebookAuthProvider()

   const googleSignIn = async () => {
      await firebaseAuth().signInWithRedirect(googleProvider)
   }

   const facebooksignIn = async () => {
      await firebaseAuth().signInWithRedirect(faceBookProvider)
   }

   return (
      <>
         {
            <Grid container className={classes.root}>
               <Grid item xs={12} md={8} className={classes.intro}>
                  <Box
                     display="flex"
                     textAlign="left"
                     height="100px"
                     alignItems="center"
                  >
                     <Box display="flex" alignItems="center">
                        <img
                           src={AppLogo}
                           style={{ maxWidth: '48px', maxHeight: '48px' }}
                           alt=""
                        />
                     </Box>

                     <Typography
                        variant="h4"
                        style={{
                           color: 'white',
                           fontWeight: 700,
                           paddingLeft: '8px'
                        }}
                     >
                        MiTummy
                     </Typography>
                  </Box>
               </Grid>
               {/*Login Form*/}
               <Grid
                  item
                  container
                  xs={12}
                  md={4}
                  alignItems="center"
                  justify="center"
                  className={classes.form}
               >
                  <Grid
                     container
                     spacing={2}
                     direction="column"
                     className={classes.socialButtonsContainer}
                  >
                     <Grid item xs>
                        <SocialLoginButton
                           img={GoogleIcon}
                           onClick={googleSignIn}
                           title="Log in with Google"
                        />
                     </Grid>
                     <Grid item xs>
                        <SocialLoginButton
                           img={FacebookIcon}
                           onClick={facebooksignIn}
                           title="Log in with Facebook"
                        />
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         }
      </>
   )
}

export default Home
