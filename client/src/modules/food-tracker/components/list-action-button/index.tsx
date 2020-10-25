import React from "react";
import { Grid } from "@material-ui/core";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const ListActionButtons = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <EditButton />
      </Grid>
      <Grid item xs={6}>
        <DeleteButton />
      </Grid>
    </Grid>
  );
};

export default ListActionButtons;
