import React, { FC } from "react";
import { CircularProgress } from "@material-ui/core";

const Loader: FC<{ color?: string; size?: number }> = ({ color, size }) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: color
      }}
    >
      <CircularProgress
        disableShrink
        color={color ? "inherit" : "primary"}
        size={size}
      />
    </div>
  );
};

export default Loader;
