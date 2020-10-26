import React, { FC } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { IconButton, Tooltip } from "@material-ui/core";

const DeleteButton: FC<{
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ onClick }) => {
  return (
    <Tooltip title="Delete">
      <IconButton onClick={onClick}>
        <HighlightOffIcon />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
