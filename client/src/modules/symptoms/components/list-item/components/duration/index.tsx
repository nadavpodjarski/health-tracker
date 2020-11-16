import React, { FC } from "react";
import { Box, Typography } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const Duration: FC<{ duration: string | number }> = ({ duration }) => {
  return (
    <Box display="inline-block">
      <Typography component="span">
        <AccessTimeIcon fontSize="small" />
      </Typography>
      <Typography component="span">{`Duration : ${duration} `}</Typography>
      <Typography
        component="span"
        style={{ fontSize: "14px" }}
        color="textSecondary"
      >
        minutes
      </Typography>
    </Box>
  );
};

export default Duration;
