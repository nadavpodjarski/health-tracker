import React, { FC } from "react";
import { Grid, Button } from "@material-ui/core";
import { useStyles } from "../../common/styles";

import Loader from "../../../../../../common/components/loader";

const AddMealActionButtons: FC<{
  onCancel: () => void;
  onConfirm: () => void;
  isSaving: boolean;
  isValid: boolean;
}> = ({ onCancel, onConfirm, isSaving, isValid }) => {
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
          className={classes.addConfirmButton}
          onClick={onConfirm}
          disabled={!isValid}
          endIcon={isSaving ? <Loader color="white" size={20} /> : ""}
        >
          {isSaving ? "Saving" : "Done"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddMealActionButtons;
