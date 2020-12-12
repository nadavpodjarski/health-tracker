import React, { FC } from 'react'
import { Button, Box } from '@material-ui/core'
import { useLayoutStyles } from '../styles/layout'

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'

const AddMealButton: FC<{ onClick: () => void; className: string }> = ({
   onClick,
   className
}) => {
   const classes = useLayoutStyles()
   return (
      <Box className={classes.addMealButtonWrapper}>
         <Button
            onClick={onClick}
            className={className}
            endIcon={<PlaylistAddIcon />}
         >
            Add Meal
         </Button>
      </Box>
   )
}

export default AddMealButton
