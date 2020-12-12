import React, { FC } from 'react'
import { Button, Box } from '@material-ui/core'
import { useLayoutStyles } from '../styles/layout'

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'

const AddSymptomButton: FC<{ onClick: () => void; className: string }> = ({
   onClick,
   className
}) => {
   const classes = useLayoutStyles()
   return (
      <Box className={classes.addSymptomButtonWrapper}>
         <Button
            onClick={onClick}
            className={className}
            endIcon={<PlaylistAddIcon />}
         >
            Add Symptom
         </Button>
      </Box>
   )
}

export default AddSymptomButton
