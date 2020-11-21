import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { colors } from "../colors";

export let darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: colors.ming
    },
    secondary: {
      main: colors.tourquize
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

darkTheme = responsiveFontSizes(darkTheme);
