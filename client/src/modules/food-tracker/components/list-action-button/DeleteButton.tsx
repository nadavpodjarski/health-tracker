import React, { FC } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { IconButton } from "@material-ui/core";

const DeleteButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <HighlightOffIcon />
    </IconButton>
  );
};

export default DeleteButton;
