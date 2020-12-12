import React from 'react'
import { Box, Typography, Grid, makeStyles } from '@material-ui/core'
import Logo from '../../../common/components/app-logo'

const useStyles = makeStyles((theme) => ({
   header: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      padding: theme.spacing(2)
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
                  <Logo size={56} />
               </Box>

               <Typography
                  variant="h4"
                  style={{
                     paddingLeft: 8,
                     letterSpacing: 3
                  }}
               >
                  Mitummy
               </Typography>
            </Box>
         </Grid>
      </Grid>
   )
}

export default Intro
