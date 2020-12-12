import React from 'react'
import { Grid, makeStyles, Box, Typography } from '@material-ui/core'

import { useFirebaseAuth } from '../../../main/firebase/useFirebaseAuth'

import FacebookIcon from '../../../resources/images/social-logos/facebook.png'
import GoogleIcon from '../../../resources/images/social-logos/google2.png'
import SocialLoginButton from '../social-login-button'

const useStyles = makeStyles((theme) => ({
   socialButtonsContainer: {
      width: '350px',
      maxWidth: '80%',
      margin: '16px 0'
   }
}))

const LoginForm = () => {
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
   return (
      <Grid
         container
         spacing={2}
         direction="column"
         className={classes.socialButtonsContainer}
      >
         <Box
            style={{
               width: '100%',
               textAlign: 'left',
               padding: 8,
               color: 'black'
            }}
         >
            <Typography
               variant="h3"
               style={{
                  fontWeight: 900,
                  marginBottom: '24px'
               }}
            >
               Try it
               <Typography
                  variant="h4"
                  style={{ fontWeight: 900, lineHeight: 1.1 }}
               >
                  Now for free
               </Typography>
            </Typography>
         </Box>
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
   )
}

export default LoginForm
