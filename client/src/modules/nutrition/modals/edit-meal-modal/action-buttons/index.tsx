import React, { FC } from 'react'
import { Grid, Button } from '@material-ui/core'
import { useModalStyles } from '../../../styles/modal'

import Loader from '../../../../../common/components/loader'

const AddMealActionButtons: FC<{
   onCancel: () => void
   onConfirm: () => void
   isUpdating: boolean
   isDisabled: boolean
}> = ({ onCancel, onConfirm, isUpdating, isDisabled }) => {
   const classes = useModalStyles()
   return (
      <Grid container spacing={3} className={classes.actionButtonWrapper}>
         <Grid item container xs={6} justify="flex-end">
            <Button className={classes.cancelButton} onClick={onCancel}>
               Cancel
            </Button>
         </Grid>
         <Grid item container xs={6} justify="flex-start">
            <Button
               disabled={!isDisabled}
               className={classes.editConfirmButton}
               onClick={onConfirm}
               endIcon={isUpdating ? <Loader color="white" size={20} /> : ''}
            >
               {isUpdating ? 'Updating' : 'Done'}
            </Button>
         </Grid>
      </Grid>
   )
}

export default AddMealActionButtons
