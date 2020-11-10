import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { colors } from "../colors";

let darkTheme = createMuiTheme({
  palette: {
    type: "dark",
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

darkTheme = responsiveFontSizes(darkTheme);

export { darkTheme };
