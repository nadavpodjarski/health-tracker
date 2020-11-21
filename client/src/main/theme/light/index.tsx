import { teal, grey, deepPurple } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export let lightTheme = createMuiTheme({
  palette: {
    background: { default: "#F3F2EF" },
    primary: {
      main: "#00D9C0"
    },
    secondary: {
      main: "#00D9C0"
    }
  },
  typography: {
    fontFamily: "Poppins, Arial",
    fontSize: 16
  },
  mixins: {
    toolbar: {
      minHeight: "56px"
    }
  },
  overrides: {
    MuiListItemIcon: {
      root: {
        color: "inherit"
      }
    }
  }
});

lightTheme = responsiveFontSizes(lightTheme);
