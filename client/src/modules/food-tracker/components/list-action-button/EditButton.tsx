import React, { FC } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";

const EditButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;
