import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Box, useTheme } from '@material-ui/core'

const Initializing = () => {
   const theme = useTheme()
   return (
      <Box
         width="100%"
         height="100%"
         display="flex"
         justifyContent="center"
         alignItems="center"
      >
         <Loader
            type="Grid"
            color={theme.palette.primary.main}
            height={100}
            width={100}
         />
      </Box>
   )
}

export default Initializing
