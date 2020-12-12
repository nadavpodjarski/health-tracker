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
            Add, Edit and Delete your symptoms description, title, intesity and
            more.
         </Typography>
      </Box>
   )
}

export default Intro
