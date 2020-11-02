import React, { FC } from "react";
import { Grid, Button } from "@material-ui/core";
import { useStyles } from "../../styles";

const AddMealActionButtons: FC<{
  onCancel: () => void;
  onConfirm: () => void;
}> = ({ onCancel, onConfirm }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item container xs={6} justify="flex-end">
        <Button className={classes.cancelButton} onClick={onCancel}>
          Cancel
        </Button>
      </Grid>
      <Grid item container xs={6} justify="flex-start">
        <Button className={classes.confirmButton} onClick={onConfirm}>
          {"Done"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddMealActionButtons;
