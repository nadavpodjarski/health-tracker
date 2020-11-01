import React, { FC } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton, Tooltip } from "@material-ui/core";

const EditButton: FC<{
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ onClick }) => {
  return (
    <Tooltip title="Edit">
      <IconButton onClick={onClick}>
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
};

export default EditButton;
