import React, { FC } from "react";
import { Box, Typography, Chip } from "@material-ui/core";
import { SymptomsScale } from "../../../../../../types/symptoms";
const Scale: FC<{ scale: SymptomsScale }> = ({ scale }) => {
  const level = SymptomsScale[scale];
  return (
    <Box>
      <Typography component="span">
        <Chip
          label={level}
          variant="outlined"
          component="span"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        />
      </Typography>
    </Box>
  );
};

export default Scale;
