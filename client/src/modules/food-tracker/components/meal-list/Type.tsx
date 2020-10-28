import React, { FC } from "react";
import { Typography } from "@material-ui/core";

const Type: FC<{ type: string }> = ({ type }) => {
  return <Typography variant="h6">{type}</Typography>;
};

export default Type;
