import React, { FC, useState } from "react";
import { MoreVert, HighlightOff, Edit } from "@material-ui/icons";

import {
  Menu,
  MenuItem,
  Fade,
  IconButton,
  Typography,
  Box
} from "@material-ui/core";

const ListActionButtons: FC<{
  deleteHandler: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  editHandler: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}> = ({ deleteHandler, editHandler }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDeleteHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    deleteHandler(event);
    handleClose();
  };

  const onEditHadnler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    editHandler(event);
    handleClose();
  };
  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={onDeleteHandler}>
          <HighlightOff />
          <Typography style={{ padding: "0 8px" }}>Delete</Typography>
        </MenuItem>
        <MenuItem onClick={onEditHadnler}>
          <Edit />
          <Typography style={{ padding: "0 8px" }}>Edit</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ListActionButtons;
