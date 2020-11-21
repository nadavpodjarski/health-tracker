import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'

import moment from 'moment'

const Name: FC<{ name: string; date: Date }> = ({ name, date }) => {
   return (
      <Box display="inline-block">
         <Typography
            component="span"
            variant="h6"
            style={{ fontWeight: 'bold' }}
         >
            {name}
         </Typography>
         <Typography
            component="span"
            color="textSecondary"
            style={{ fontSize: '12px', margin: '0 6px' }}
         >
            at
         </Typography>
         <Typography component="span" color="textSecondary">
            {moment(date).format('MM/DD/YYYY')}
         </Typography>
      </Box>
   )
}

export default Name
