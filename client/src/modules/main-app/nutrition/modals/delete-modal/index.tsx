import React, { FC, useState } from 'react'
import { Grid, Button, Typography, Divider, useTheme } from '@material-ui/core'
import Loader from '../../../../../common/components/loader'

import { useDispatch } from 'react-redux'

import * as nutritionActions from '../../../../../redux/nutrition/actions'
import * as uiActions from '../../../../../redux/ui/actions'

const DeleteModalContent: FC<{
   docId: string
}> = ({ docId }) => {
   const [isDeleting, setIsDeleting] = useState<boolean>(false)

   const dispatch = useDispatch()
   const theme = useTheme()

   const onConfirm = async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      setIsDeleting(true)
      await dispatch(nutritionActions.deleteMeal(docId))
      setIsDeleting(false)
      dispatch(uiActions.closeModal())
   }

   return (
      <>
         <Typography style={{ margin: '16px 0' }} variant="h6" noWrap>
            Delete Meal ?
         </Typography>
         <Divider
            style={{ background: theme.palette.primary.main, margin: '16px 0' }}
         />
         <Grid container style={{ marginTop: '50px' }} spacing={2}>
            <Grid item xs={6} container justify="flex-end">
               <Button
                  style={{
                     background: theme.palette.primary.main,
                     color: 'white'
                  }}
                  onClick={() => dispatch(uiActions.closeModal())}
               >
                  Cancel
               </Button>
            </Grid>
            <Grid item xs={6} container>
               <Button
                  style={{
                     background: 'inherit',
                     color: theme.palette.getContrastText(
                        theme.palette.background.paper
                     ),
                     border: `1px solid ${theme.palette.primary.main}`
                  }}
                  endIcon={
                     isDeleting ? (
                        <Loader
                           size={16}
                           color={theme.palette.getContrastText(
                              theme.palette.background.paper
                           )}
                        />
                     ) : (
                        ''
                     )
                  }
                  onClick={onConfirm}
               >
                  {isDeleting ? 'Deleting' : 'Delete'}
               </Button>
            </Grid>
         </Grid>
      </>
   )
}

export default DeleteModalContent
