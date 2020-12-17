import React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core'

import { Link } from 'react-router-dom'

import { homePaths } from '../../../../core/routes/routes.config'

const useStyles = makeStyles((theme) => ({
   textWrapper: {
      textAlign: 'left',
      marginTop: 80,
      [theme.breakpoints.down('sm')]: {
         marginTop: 50
      }
   },
   readMoreButton: {
      textTransform: 'none',
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      width: 120,
      borderRadius: 25,
      '&:hover': {
         background: theme.palette.primary.main,
         color: theme.palette.common.white
      },
      padding: theme.spacing(1, 2),
      textDecoration: 'none'
   },
   readMoreButtonWrapper: {
      marginTop: 30
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
               Mitummy aims to provide you tools to help track your Gut healt
               through food intolerance and allergies and maitain a healthy mind
               and body
            </Typography>
            <Box className={classes.readMoreButtonWrapper}>
               <Link to={homePaths.ABOUT} className={classes.readMoreButton}>
                  Read More
               </Link>
            </Box>
         </Box>
      </Box>
   )
}

export default Intro
