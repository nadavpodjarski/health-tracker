import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import CommentsButton from "./CommentsButton";
const ListActionButtons: FC<{
  comments: string;
  onDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ comments, onDelete }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <CommentsButton {...{ comments }} />
      </Grid>
      <Grid item xs={4}>
        <EditButton />
      </Grid>
      <Grid item xs={4}>
        <DeleteButton onClick={(event) => onDelete(event)} />
      </Grid>
    </Grid>
  );
};

export default ListActionButtons;
