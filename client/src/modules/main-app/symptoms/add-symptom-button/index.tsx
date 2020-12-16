import React, { FC } from 'react'
import { Button, Box, makeStyles } from '@material-ui/core'
import { useLayoutStyles } from '../styles/layout'

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'

const useStyles = makeStyles((theme) => ({
   addButton: {
      fontSize: '16px',
      background: theme.palette.primary.main,
      color: 'white',
      width: '160px',
      '&:hover': {
         background: theme.palette.primary.main
      },
      [theme.breakpoints.down('sm')]: {
         fontSize: '16px'
      },
      borderRadius: 25,
      transition: 'all 0.2s linear',
      boxShadow: theme.shadows[4]
   }
}))

const AddSymptomButton: FC<{ onClick: () => void; className: string }> = ({
   onClick,
   className
}) => {
   const classes = useLayoutStyles()
   const tryClasses = useStyles()
   return (
      <Box className={classes.addSymptomButtonWrapper}>
         <Button
            onClick={onClick}
            className={tryClasses.addButton}
            endIcon={<PlaylistAddIcon />}
            style={{}}
         >
            Add Symptom
         </Button>
      </Box>
   )
}

export default AddSymptomButton
