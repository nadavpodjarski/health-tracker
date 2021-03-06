import React, { FC } from 'react'
import { Box, Typography, Chip, Paper, Icon, Tooltip } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import NotInterestedIcon from '@material-ui/icons/NotInterested'

const Duration: FC<{ duration: string | number }> = ({ duration }) => {
   return duration ? (
      <Box display="flex">
         <Tooltip title="Duration">
            <Icon
               style={{
                  display: 'flex',
                  alignItems: 'flex-end'
               }}
            >
               <AccessTimeIcon fontSize="small" />
            </Icon>
         </Tooltip>

         <Box display="inline-block">
            <Typography
               component="span"
               style={{ fontWeight: 'bold', fontSize: 20 }}
            >
               {duration}
            </Typography>

            <Typography component="span" style={{ fontSize: 14 }}>
               /min
            </Typography>
         </Box>
      </Box>
   ) : (
      <Chip
         component={Paper}
         label="Duration"
         style={{ fontSize: 14 }}
         icon={<NotInterestedIcon />}
      />
   )
}

export default Duration
