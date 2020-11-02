import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import CommentsButton from "./CommentsButton";
const ListActionButtons: FC<{
  comments: string;
  deleteHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  editHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ comments, deleteHandler, editHandler }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <CommentsButton {...{ comments }} />
      </Grid>
      <Grid item xs={4}>
        <EditButton onClick={editHandler} />
      </Grid>
      <Grid item xs={4}>
        <DeleteButton onClick={(event) => deleteHandler(event)} />
      </Grid>
    </Grid>
  );
};

export default ListActionButtons;
