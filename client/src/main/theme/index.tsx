import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides';

type overridesNameToClassKey = {
    [P in keyof Required<MuiPickersOverrides>]: keyof MuiPickersOverrides[P];
};

interface CustomType  {
    MuiPickersBasePicker: {
      pickerView: {
        maxWidth?:string
      };
    };
  };

declare module '@material-ui/core/styles/overrides' {
     interface ComponentNameToClassKey extends CustomType {} 
     export interface ComponentNameToClassKey extends overridesNameToClassKey {}
  }


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

}

let theme = createMuiTheme({
    palette: {
        type: "light"
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
        },
        MuiPickersBasePicker:{
           pickerView:{maxWidth:"350px"}
        }
      
    },
});



theme = responsiveFontSizes(theme);

export { theme }