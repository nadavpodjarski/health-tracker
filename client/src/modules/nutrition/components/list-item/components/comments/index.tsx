import React, { FC } from "react";
import {
  IconButton,
  Tooltip,
  Box,
  Typography,
  Divider,
  makeStyles
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    padding: "22px",
    borderRadius: "20px",
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[3]
  },
  divider: {
    margin: "6px 0 12px 0"
  },
  p: {
    fontSize: "16px"
  },
  arrow: {
    fontSize: 24,
    "&::before": {
      border: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.background.paper,
      boxSizing: "border-box",
      boxShadow: theme.shadows[3]
    }
  }
}));

const Comments: FC<{ comments: string }> = ({ comments }) => {
  const classes = useStyles();
  return (
    <Tooltip
      classes={{ tooltip: classes.root, arrow: classes.arrow }}
      title={
        <Box>
          <Typography style={{ fontSize: "14px" }} color="textSecondary">
            Comments
          </Typography>
          <Divider className={classes.divider} />
          <Typography component="p" className={classes.p} color="textPrimary">
            {comments}
          </Typography>
        </Box>
      }
      placement="left"
      arrow
      interactive
    >
      <IconButton>
        <CommentIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default Comments;
