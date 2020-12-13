import React from 'react'
import { makeStyles, Box, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   textWrapper: {
      textAlign: 'left',
      marginTop: 100,
      padding: theme.spacing(0, 2)
   },
   readMoreButton: {
      textTransform: 'none',
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      marginTop: 30,
      width: 120,
      borderRadius: 25,
      '&:hover': {
         background: theme.palette.primary.main,
         color: theme.palette.common.white
      }
   }
}))

const Intro = () => {
   const classes = useStyles()
   return (
      <Box height="100%" display="flex" width="100%">
         <Box className={classes.textWrapper}>
            <Typography
               variant="h3"
               style={{ fontWeight: 700, whiteSpace: 'nowrap' }}
            >
               Track Your
            </Typography>
            <Typography
               variant="h3"
               style={{ fontWeight: 700, whiteSpace: 'nowrap' }}
            >
               Food Intolerance
            </Typography>
            <Typography style={{ marginTop: 30, fontSize: 14 }}>
               Mitummy aims to provide you tools to help track your food
               intolerance and maitain a healthy mind and body
            </Typography>
            <Button className={classes.readMoreButton}>Read More</Button>
         </Box>
      </Box>
   )
}

export default Intro
