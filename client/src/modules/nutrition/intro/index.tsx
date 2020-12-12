import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { useLayoutStyles } from '../styles/layout'

const Intro = () => {
   const classes = useLayoutStyles()
   return (
      <Box className={classes.introWrapper}>
         <Typography
            component="p"
            style={{
               fontSize: '14px',
               maxWidth: '100%',
               padding: 16
            }}
            align="left"
         >
            Add, Edit and Delete your meals contents. Take in consideration that
            the more detailed the food ingredient that you will type in, The
            easier it will be for you to track your food intolerance, and to
            mainatin a healthier mind and body.
         </Typography>
      </Box>
   )
}

export default Intro
