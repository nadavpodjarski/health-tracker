import { makeStyles, Theme } from "@material-ui/core";
import { colors } from "../../../../../../main/theme/colors";

export const useStyles = makeStyles((theme: Theme) => ({
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
  addConfirmButton: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    width: "130px",
    "&:hover": {
      background: "rgba(0, 217, 192, 0.7)",
      color: theme.palette.common.white
    },
    "&:disabled": {
      background: theme.palette.divider
    }
  },
  editConfirmButton: {
    background: theme.palette.primary.main,
    color: "white",
    width: "130px",
    "&:hover": {
      background: "rgba(0, 217, 192, 0.7)",
      color: "white"
    },
    "&:disabled": {
      background: theme.palette.divider
    }
  },

  comments: {
    width: "100%",
    padding: "16px",
    fontSize: "18px",
    fontFamily: "Poppins"
  },
  commentsRoot: {
    padding: 0
  },
  datePicker: {
    padding: "16px 0 40px 0"
  }
}));
