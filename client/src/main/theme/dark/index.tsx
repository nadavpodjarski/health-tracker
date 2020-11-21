import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

export let darkTheme = createMuiTheme({
   palette: {
      type: 'dark',
      primary: {
         main: '#00D9C0'
      },
      secondary: {
         main: '#00D9C0'
      }
   },
   typography: {
      fontFamily: 'Poppins, Arial',
      fontSize: 16
   },
   mixins: {
      toolbar: {
         minHeight: '56px'
      }
   },
   overrides: {
      MuiListItemIcon: {
         root: {
            color: 'inherit'
         }
      }
   }
})

darkTheme = responsiveFontSizes(darkTheme)
