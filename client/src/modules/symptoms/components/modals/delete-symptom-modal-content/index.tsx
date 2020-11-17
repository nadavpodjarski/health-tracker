import React, { FC, useState } from "react";
import { Grid, Button, Typography, Divider, useTheme } from "@material-ui/core";
import Loader from "../../../../../common/components/loader";

const DeleteModalContent: FC<{
  onCancelDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onConfirmDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<any>;
}> = ({ onCancelDelete, onConfirmDelete }) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const theme = useTheme();
  const onConfirm = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsDeleting(true);
    await onConfirmDelete(event);
    setIsDeleting(false);
  };

  return (
    <>
      <Typography style={{ margin: "16px 0" }} variant="h6" noWrap>
        Delete Symptom ?
      </Typography>
      <Divider
        style={{ background: theme.palette.secondary.main, margin: "16px 0" }}
      />
      <Grid container style={{ marginTop: "50px" }} spacing={2}>
        <Grid item xs={6} container justify="flex-end">
          <Button
            style={{
              background: theme.palette.secondary.main,
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
              color: theme.palette.getContrastText(
                theme.palette.background.paper
              ),
              border: `1px solid ${theme.palette.secondary.main}`
            }}
            endIcon={
              isDeleting ? (
                <Loader
                  size={16}
                  color={theme.palette.getContrastText(
                    theme.palette.background.paper
                  )}
                />
              ) : (
                ""
              )
            }
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
