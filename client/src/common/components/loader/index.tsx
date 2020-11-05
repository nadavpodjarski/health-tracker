import React, { FC } from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";

const Loader: FC<{
  color?: string;
  size?: number;
  title?: string;
}> = ({ color, size, title }) => {
  return (
    <Grid
      style={{
        height: "100%",
        color: color
      }}
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Typography style={{ marginBottom: title ? "12px" : "" }}>
        {title}
      </Typography>
      <CircularProgress
        disableShrink
        color={color ? "inherit" : "primary"}
        size={size}
      />
    </Grid>
  );
};

export default Loader;
