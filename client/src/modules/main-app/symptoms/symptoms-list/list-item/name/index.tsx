import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'

import moment from 'moment'

const Name: FC<{ name: string; date: Date }> = ({ name, date }) => {
   return (
      <Box display="inline-block">
         <Typography
            component="span"
            style={{ fontWeight: 'bold', fontSize: 20 }}
         >
            {name}
         </Typography>
         <Typography
            component="span"
            color="textSecondary"
            style={{ fontSize: 12, margin: '0 6px' }}
         >
            at
         </Typography>
         <Typography
            component="span"
            color="textSecondary"
            style={{ fontSize: 16 }}
         >
            {moment(date).format('HH:mm')}
         </Typography>
      </Box>
   )
}

export default Name
