import React, { FC } from 'react'
import {
   CircularProgress,
   Grid,
   Typography,
   useTheme,
   Box
} from '@material-ui/core'

const Loader: FC<{
   color?: string
   size?: number
   title?: string
}> = ({ color, size, title }) => {
   const theme = useTheme()
   return (
      <Grid
         style={{
            height: '100%',
            color: color
         }}
         container
         direction="column"
         alignItems="center"
         justify="center"
      >
         <Typography style={{ marginBottom: title ? '12px' : '' }}>
            {title}
         </Typography>
         <Box
            style={{
               background: theme.palette.background.paper,
               padding: 12,
               borderRadius: '50%',
               boxShadow: theme.shadows[4],
               display: 'flex',
               alignItems: 'center'
            }}
         >
            <CircularProgress
               disableShrink
               color={color ? 'inherit' : 'secondary'}
               size={size}
            />
         </Box>
      </Grid>
   )
}

export default Loader
