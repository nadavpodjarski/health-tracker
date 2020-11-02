import { makeStyles, Theme } from "@material-ui/core";
import { colors } from "../../../../../main/theme/colors";
export const useStyles = makeStyles((theme: Theme) => ({
  select: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0"
  },
  ingredients: {
    display: "flex",
    alignItems: "center",
    padding: "8px 0"
  },
  cancelButton: {
    background: "inherit",
    color: colors.tourquize,
    border: `1px solid ${colors.tourquize}`,
    width: "80px"
  },
  confirmButton: {
    background: colors.tourquize,
    color: "white",
    width: "100px",
    "&:hover": {
      background: "rgba(0, 217, 192, 0.7)",
      color: "white"
    }
  },
  textArea: {
    minWidth: "100%",
    maxWidth: "100%",
    padding: "16px",
    fontSize: "18px",
    minHeight: "100px",
    fontFamily: "Poppins",
    maxHeight: "100px"
  },
  datePicker: {
    padding: "16px 0 40px 0"
  }
}));
