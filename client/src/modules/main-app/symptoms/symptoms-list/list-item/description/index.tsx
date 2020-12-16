import React, { FC, SetStateAction, Dispatch } from 'react'
import { Button, makeStyles, Chip, Paper } from '@material-ui/core'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import NotInterestedIcon from '@material-ui/icons/NotInterested'

const useStyles = makeStyles((theme) => ({
   decriptionButton: {
      boxSizing: 'border-box',
      color: theme.palette.secondary.main,
      fontSize: 14,
      border: `1px solid ${theme.palette.secondary.main}`,
      '&:hover': {
         color: theme.palette.secondary.main,
         border: `1px solid ${theme.palette.secondary.main}`,
         borderRadius: 25
      },
      '&:disabled': {
         background: theme.palette.divider,
         color: theme.palette.common.white
      },
      [theme.breakpoints.down('sm')]: {
         width: '100%'
      },
      width: '100%',
      minWidth: 150,
      transition: 'all 0.3s linear'
   },
   noDescriptionChip: {
      [theme.breakpoints.down('sm')]: {
         fontSize: 14
      }
   }
}))

const Description: FC<{
   isAvailable: boolean
   isOpen: boolean
   setIsOpen: Dispatch<SetStateAction<boolean>>
}> = ({ isAvailable, isOpen, setIsOpen }) => {
   const classes = useStyles()

   const openHandler = () => {
      setIsOpen((prevState) => !prevState)
   }

   return isAvailable ? (
      <Button
         onClick={openHandler}
         className={classes.decriptionButton}
         endIcon={isOpen ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
      >
         Description
      </Button>
   ) : (
      <Chip
         component={Paper}
         icon={<NotInterestedIcon />}
         label="Description"
         className={classes.noDescriptionChip}
      />
   )
}

export default Description
