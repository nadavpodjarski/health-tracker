import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: { default: "#F3F2EF" }
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
