import React, { FC } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";

// TODO fix tooltip
const Comments: FC<{ comments: string }> = ({ comments }) => {
  return (
    <Tooltip title={comments}>
      <IconButton>
        <CommentIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default Comments;
