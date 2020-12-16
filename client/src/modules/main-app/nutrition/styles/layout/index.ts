import { makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'

export const useLayoutStyles = makeStyles((theme) => ({
   moduleRoot: {
      display: 'flex',
      flex: 1,
      minHeight: 0,
      justifyContent: 'center',
      width: '100%',
      flexShrink: 1
   },
   innerModule: {
      maxWidth: 1200,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: '100%'
   },
   addMealButton: {
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
   },
   header: {
      width: '100%',
      padding: '16px 0',
      [theme.breakpoints.down('md')]: {
         padding: '16px 12px'
      },
      display: 'flex',
      flexDirection: 'column'
   },
   introWrapper: {
      background: fade(theme.palette.secondary.main, 0.03),
      borderRadius: 7,
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7,
      height: '100%',
      display: 'flex',
      minHeight: 100
   },
   addMealButtonWrapper: {
      background: fade(theme.palette.secondary.main, 0.03),
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      borderTopRightRadius: 7,
      borderBottomRightRadius: 7,
      padding: theme.spacing(2, 0)
   }
}))
