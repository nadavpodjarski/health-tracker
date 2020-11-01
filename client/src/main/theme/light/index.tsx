import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { colors } from "../colors";
let lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: { default: "#F3F2EF", paper: "white" },
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

export { lightTheme };
