import React, { FC } from "react";
import CommentIcon from "@material-ui/icons/Comment";
import {
  IconButton,
  Paper,
  Tooltip,
  Typography,
  Divider
} from "@material-ui/core";
import { colors } from "../../../../../main/theme";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  tooltip: {
    padding: "16px",
    border: "0",
    fontSize: "18px",
    lineHeight: "1.3"
  }
}));

const CommentsButton: FC<{ comments: string }> = ({ comments }) => {
  const classes = useStyles();
  return (
    <Tooltip
      title={
        <Paper elevation={3} className={classes.tooltip}>
          <Typography color="textSecondary">Comments</Typography>
          <Divider style={{ background: colors.ming, margin: "16px 0" }} />
          {comments}
        </Paper>
      }
    >
      <IconButton disabled={!comments}>
        <CommentIcon style={{ color: comments ? colors.ming : "lightgrey" }} />
      </IconButton>
    </Tooltip>
  );
};

export default CommentsButton;
