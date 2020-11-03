import React, { FC, useState } from "react";
import { Grid, Button, Typography, Divider } from "@material-ui/core";
import { colors } from "../../../../main/theme/colors";
import Loader from "../../../../common/components/loader";
const DeleteModalContent: FC<{
  onCancelDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onConfirmDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<any>;
  toggler: () => void;
}> = ({ onCancelDelete, onConfirmDelete, toggler }) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const onCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onCancelDelete(event);
    toggler();
  };

  const onConfirm = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsDeleting(true);
    await onConfirmDelete(event);
    setIsDeleting(false);
    toggler();
  };

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
            onClick={onCancel}
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
            endIcon={isDeleting ? <Loader size={20} /> : ""}
            onClick={onConfirm}
          >
            {isDeleting ? "Deleting" : "Delete"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default DeleteModalContent;
