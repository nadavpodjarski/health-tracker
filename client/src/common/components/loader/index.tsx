import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <CircularProgress disableShrink />
    </div>
  );
};

export default Loader;
