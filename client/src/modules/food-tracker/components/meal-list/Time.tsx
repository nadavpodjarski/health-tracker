import React, { FC } from "react";
import { Typography } from "@material-ui/core";

const Time: FC<{ time: string }> = ({ time }) => {
  return <Typography>{time}</Typography>;
};

export default Time;
