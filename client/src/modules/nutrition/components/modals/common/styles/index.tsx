import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  ingredients: {
    display: "flex",
    alignItems: "center",
    padding: "8px 0"
  },
  cancelButton: {
    background: "inherit",
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    width: "80px"
  },
  addConfirmButton: {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    width: "130px",
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.common.white
    },
    "&:disabled": {
      background: theme.palette.divider
    }
  },
  editConfirmButton: {
    background: theme.palette.secondary.main,
    color: "white",
    width: "130px",
    "&:hover": {
      background: theme.palette.secondary.main,
      color: "white"
    },
    "&:disabled": {
      background: theme.palette.divider
    }
  },
  datePicker: {
    paddingTop: "24px"
  },
  dateTitle: {
    padding: "12px 0"
  },
  actionButtonWrapper: {
    marginTop: "40px"
  }
}));
