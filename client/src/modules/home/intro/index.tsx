import React from 'react'
import { Box, Typography, Grid, makeStyles, Divider } from '@material-ui/core'
import Logo from '../../../common/components/app-logo'

const useStyles = makeStyles((theme) => ({
   header: {
      display: 'flex',
      height: 150,
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
         height: 100
      }
   },
   about: {
      '& > p': {
         fontSize: 22,
         lineHeight: 1.6,
         [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            lineHeight: 1.4
         }
      },
      width: '80%'
   },
   bottom: {
      '& > p': {
         fontSize: 22,
         lineHeight: 1.6,
         [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            lineHeight: 1.4
         }
      },
      width: '80%',
      marginTop: '24px'
   }
}))

const Intro = () => {
   const classes = useStyles()
   return (
      <Grid container direction="column">
         <Grid item xs>
            <Box className={classes.header}>
               <Box display="flex" alignItems="center">
                  <Logo size={72} />
               </Box>

               <Typography
                  variant="h3"
                  style={{
                     fontWeight: 700,
                     paddingLeft: 8
                  }}
               >
                  Mitummy
               </Typography>
            </Box>
         </Grid>
         <Grid item xs={12}>
            <Box
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%'
               }}
            >
               <Box className={classes.about}>
                  <Typography variant="h5">About</Typography>
                  <Divider
                     style={{
                        background: 'rgba(255,255,255,0.7)',
                        margin: '12px 0'
                     }}
                  />
                  <Typography component="p">
                     Our common belief is that our Gut Microbiome reflects on
                     each aspect of our lives. Start from our general Health up
                     to our Thoughts. Our Gut Microbiome is a delicate and
                     dynamic living microorganism culture. That can be effected
                     in many ways. Through The food that we eat. The sport
                     activities we take, The quality of our sleep, and the state
                     of stress we live in.
                  </Typography>
               </Box>
            </Box>
            <Grid item xs={12}>
               <Box
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     width: '100%'
                  }}
               >
                  <Box className={classes.bottom}>
                     <Typography variant="h5">Goal</Typography>
                     <Divider
                        style={{
                           background: 'rgba(255,255,255,0.7)',
                           margin: '12px 0',
                           width: '80%'
                        }}
                     />
                     <Typography component="p" style={{ width: '80%' }}>
                        <strong>MiTummy</strong> aims to help you track Your
                        lifestyle and how it affects you for good and bad,
                        through your Food intolerance, Sport Activities,
                        Emotional Stress, and More...
                     </Typography>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </Grid>
   )
}

export default Intro
