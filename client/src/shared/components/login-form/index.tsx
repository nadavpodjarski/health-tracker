import React, { FC } from 'react'
import { Grid, makeStyles, Box, Typography } from '@material-ui/core'

import { useFirebaseAuth } from '../../../core/firebase/useFirebaseAuth'

import FacebookIcon from '../../../resources/images/social-logos/facebook.png'
import GoogleIcon from '../../../resources/images/social-logos/google2.png'
import AnonymousIcon from '../../../resources/images/social-logos/ano.png'

import SocialLoginButton from './social-login-button'

const useStyles = makeStyles((theme) => ({
   socialButtonsContainer: {
      background: 'white',
      height: 400,
      maxWidth: 350
   }
}))

const LoginForm: FC = () => {
   const { firebaseAuth } = useFirebaseAuth()
   const classes = useStyles()

   const googleProvider = new firebaseAuth.GoogleAuthProvider()
   const faceBookProvider = new firebaseAuth.FacebookAuthProvider()

   const googleSignIn = async () => {
      await firebaseAuth().signInWithRedirect(googleProvider)
   }

   const facebooksignIn = async () => {
      await firebaseAuth().signInWithRedirect(faceBookProvider)
   }

   const anonymousSignIn = async () => {
      await firebaseAuth().signInAnonymously()
   }

   return (
      <Grid
         container
         spacing={2}
         direction="column"
         className={classes.socialButtonsContainer}
      >
         <Box
            style={{
               textAlign: 'left',
               padding: 8,
               color: 'black',
               height: 80,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
            }}
         >
            <Typography style={{ fontSize: 28, fontWeight: 400 }}>
               Login
            </Typography>
         </Box>
         <Grid container justify="center" style={{ marginTop: '16px' }}>
            <Grid item xs={12}>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <SocialLoginButton
                        img={GoogleIcon}
                        onClick={googleSignIn}
                        title="Log in with Google"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <SocialLoginButton
                        img={FacebookIcon}
                        onClick={facebooksignIn}
                        title="Log in with Facebook"
                     />
                  </Grid>
                  {/* <Grid item xs={12}>
                  <SocialLoginButton
                     img={AnonymousIcon}
                     onClick={anonymousSignIn}
                     title="Log in Anonymous"
                     style={{ background: colors.yellow[700] }}
                  />
               </Grid> */}
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   )
}

export default LoginForm
