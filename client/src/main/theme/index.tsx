import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const colors = {
  steelTeal: "#648381",
  davysGrey: "#575761",
  pistachio: "#8ACB88",
  maxYellowRed: "#FFBF46",
  nyanza: "#E4FDE1",
  mediumSeaGreen: "#06BA63",
  forestGreen: "#103900",
  tourquize: "#00D9C0",
  radicalRed: "#FF4365",
  englishRed: "#9F4A54",
  rosyBrown: "#AC8887",
  ming: "#15616D",
  amberSAE: "#FF7D00",
  kobe: "#78290F"
};

let theme = createMuiTheme({
  palette: {
    type: new Date().getHours() >= 18 ? "dark" : "light"
  },
  typography: {
    fontFamily: "Poppins, Arial",
    fontSize: 16
  },
  overrides: {
    // Style sheet name ⚛️
    MuiListItemIcon: {
      root: {
        color: "inherit"
      }
    }
    // MuiPickersBasePicker: {
    //   pickerView: { maxWidth: "350px" }
    // }
  }
});

theme = responsiveFontSizes(theme);

export { theme };
