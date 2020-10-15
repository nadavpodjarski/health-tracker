import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const colors = {
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
        primary: { main: colors.steelTeal },
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
                background: colors.mediumSeaGreen,
                "&:hover": {
                    border: `1px solid ${colors.pistachio}`,
                    color: colors.davysGrey,
                }
            },


        },
        MuiListItem: { root: { "&$selected": { color: "red" } } },
        MuiListItemIcon: {
            root: {
                color: "inherit"
            }
        }


    },


});



theme = responsiveFontSizes(theme);

export { theme }