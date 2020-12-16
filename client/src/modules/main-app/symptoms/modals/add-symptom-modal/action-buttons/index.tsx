import React, { FC } from 'react'
import { Grid, Button } from '@material-ui/core'
import { useModalStyles } from '../../../styles/modals'

import Loader from '../../../../../../common/components/loader'

const AddMealActionButtons: FC<{
   onCancel: () => void
   onConfirm: () => void
   isSaving: boolean
   isDisabled: boolean
}> = ({ onCancel, onConfirm, isSaving, isDisabled }) => {
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
               className={classes.addConfirmButton}
               onClick={onConfirm}
               disabled={!isDisabled}
               endIcon={isSaving ? <Loader color="white" size={20} /> : ''}
            >
               {isSaving ? 'Saving' : 'Done'}
            </Button>
         </Grid>
      </Grid>
   )
}

export default AddMealActionButtons
