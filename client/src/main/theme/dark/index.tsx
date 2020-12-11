import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

export let darkTheme = createMuiTheme({
   palette: {
      background: { default: '#06090F', paper: '#161B22' },
      type: 'dark',
      primary: {
         main: '#38a3a5'
      },
      secondary: {
         main: '#ac1cd1'
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
