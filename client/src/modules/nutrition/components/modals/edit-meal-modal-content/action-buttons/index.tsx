import React, { FC } from "react";
import { Grid, Button } from "@material-ui/core";
import { useStyles } from "../../common/styles";

import Loader from "../../../../../../common/components/loader";

const AddMealActionButtons: FC<{
  onCancel: () => void;
  onConfirm: () => void;
  isUpdating: boolean;
  isValid: boolean;
}> = ({ onCancel, onConfirm, isUpdating, isValid }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item container xs={6} justify="flex-end">
        <Button className={classes.cancelButton} onClick={onCancel}>
          Cancel
        </Button>
      </Grid>
      <Grid item container xs={6} justify="flex-start">
        <Button
          disabled={!isValid}
          className={classes.editConfirmButton}
          onClick={onConfirm}
          endIcon={isUpdating ? <Loader color="white" size={20} /> : ""}
        >
          {isUpdating ? "Updating" : "Done"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddMealActionButtons;
