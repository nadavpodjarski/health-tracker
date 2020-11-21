import React, { FC } from 'react'
import { Box, Typography, Chip, Tooltip } from '@material-ui/core'
import { SymptomsScale } from '../../../../../../types/symptoms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeight } from '@fortawesome/free-solid-svg-icons'

const Scale: FC<{ scale: SymptomsScale }> = ({ scale }) => {
   const level = SymptomsScale[scale]
   return (
      <Box display="flex" alignItems="center">
         <Tooltip title="Intensity">
            <Box
               display="flex"
               alignItems="center"
               height="100%"
               margin="0 8px"
            >
               <FontAwesomeIcon size="sm" icon={faWeight} />
            </Box>
         </Tooltip>

         <Typography component="span">
            <Chip
               label={level}
               variant="outlined"
               component="span"
               style={{
                  padding: '8px 0',
                  fontSize: '20px',
                  fontWeight: 'bold'
               }}
            />
         </Typography>
      </Box>
   )
}

export default Scale
