import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const colorScheme = {
    steelTeal: "#648381",
    davysGrey: "#575761",
    pistachio: "#8ACB88",
    maxYellowRed: "#FFBF46",
    nyanza: "#E4FDE1",
    mediumSeaGreen: "#06BA63",
    forestGreen: "#103900"
}

let theme = createMuiTheme({
    palette: {
        primary: { main: colorScheme.steelTeal },
    },
    typography: {
        fontFamily: "Poppins, Arial",
        fontSize: 16
    },
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            root: {
                color: "white",
                border: "1px solid white",
                background: colorScheme.mediumSeaGreen,
                "&:hover": {
                    border: `1px solid ${colorScheme.pistachio}`,
                    color: colorScheme.davysGrey,
                }
            },
        },
    },

});



theme = responsiveFontSizes(theme);

export { theme }