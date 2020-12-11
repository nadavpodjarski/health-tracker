import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
   ingredients: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 0'
   },
   cancelButton: {
      background: 'inherit',
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      width: '80px',
      [theme.breakpoints.down('sm')]: {
         fontSize: '14px'
      }
   },
   addConfirmButton: {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      width: '130px',
      '&:hover': {
         background: theme.palette.primary.main,
         color: theme.palette.common.white
      },
      '&:disabled': {
         background: theme.palette.divider
      },
      [theme.breakpoints.down('sm')]: {
         fontSize: '14px'
      }
   },
   editConfirmButton: {
      background: theme.palette.primary.main,
      color: 'white',
      width: '130px',
      '&:hover': {
         background: theme.palette.primary.main,
         color: 'white'
      },
      '&:disabled': {
         background: theme.palette.divider
      },
      [theme.breakpoints.down('sm')]: {
         fontSize: '14px'
      }
   },
   datePicker: {
      paddingTop: '24px'
   },
   dateTitle: {
      padding: '12px 0'
   },
   actionButtonWrapper: {
      marginTop: '40px'
   }
}))
