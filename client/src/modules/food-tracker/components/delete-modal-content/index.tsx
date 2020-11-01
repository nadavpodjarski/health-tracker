import React, { FC } from "react";
import { Grid, Button, Typography, Divider } from "@material-ui/core";
import { colors } from "../../../../main/theme/colors";

const DeleteModalContent: FC<{
  onCancelDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onConfirmDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}> = ({ onCancelDelete, onConfirmDelete }) => {
  return (
    <>
      <Typography style={{ margin: "16px 0" }} variant="h6" noWrap>
        Delete Meal ?
      </Typography>
      <Divider style={{ background: colors.ming, margin: "16px 0" }} />
      <Grid container style={{ marginTop: "50px" }} spacing={2}>
        <Grid item xs={6} container justify="flex-end">
          <Button
            style={{
              background: colors.ming,
              color: "white"
            }}
            onClick={onCancelDelete}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6} container>
          <Button
            style={{
              background: "inherit",
              color: colors.ming,
              border: `1px solid ${colors.ming}`
            }}
            onClick={onConfirmDelete}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default DeleteModalContent;
