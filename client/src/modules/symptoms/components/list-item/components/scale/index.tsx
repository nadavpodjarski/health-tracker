import React, { FC } from "react";
import { Box, Typography } from "@material-ui/core";
import { SymptomsScale } from "../../../../../../types/symptoms";
const Scale: FC<{ scale: SymptomsScale }> = ({ scale }) => {
  return (
    <Box>
      <Typography component="span">Level : </Typography>
      <Typography component="span">{SymptomsScale[scale]}</Typography>
    </Box>
  );
};

export default Scale;
