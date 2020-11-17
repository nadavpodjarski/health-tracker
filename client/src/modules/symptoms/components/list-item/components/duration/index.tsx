import React, { FC } from "react";
import { Box, Typography, Chip, Paper } from "@material-ui/core";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

const Duration: FC<{ duration: string | number }> = ({ duration }) => {
  return (
    <Box display="inline-block">
      {duration ? (
        <>
          <Typography
            component="span"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {duration}
          </Typography>

          <Typography component="span" style={{ fontSize: "14px" }}>
            /min
          </Typography>
        </>
      ) : (
        <Chip
          component={Paper}
          label="DURATION"
          style={{ fontSize: "16px" }}
          icon={<NotInterestedIcon />}
        />
      )}
    </Box>
  );
};

export default Duration;
