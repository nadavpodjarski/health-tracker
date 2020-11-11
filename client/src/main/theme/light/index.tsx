import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { colors } from "../colors";

export let lightTheme = createMuiTheme({
  palette: {
    background: { default: "#F3F2EF" },
    primary: {
      main: colors.tourquize
    },
    secondary: {
      main: colors.ming
    }
  },
  typography: {
    fontFamily: "Poppins, Arial",
    fontSize: 16
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
