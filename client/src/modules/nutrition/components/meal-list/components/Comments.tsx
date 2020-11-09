import React, { useState, FC } from "react";
import {
  Tooltip,
  IconButton,
  Collapse,
  Box,
  Typography,
  makeStyles,
  Theme
} from "@material-ui/core";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme: Theme) => ({
  comments: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px"
    }
  }
}));

export const useComments = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = useStyles();

  const CommentsButton = () => {
    return (
      <Box display="flex" alignItems="center">
        <Tooltip title="Comments">
          <IconButton onClick={() => setIsOpen((prevState) => !prevState)}>
            {isOpen ? (
              <ArrowUpwardIcon fontSize="small" />
            ) : (
              <ArrowDownwardIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    );
  };

  const Comments: FC<{ comments: string }> = ({ comments }) => {
    return (
      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        style={{ width: "100%" }}
      >
        <Box marginTop="24px" width="100%" className={classes.comments}>
          <Box width="100%" display="flex" margin="12px 0">
            <Typography color="textSecondary" style={{ fontSize: "inherit" }}>
              comments
            </Typography>
          </Box>
          <Typography component="p" style={{ fontSize: "inherit" }}>
            {comments}
          </Typography>
        </Box>
      </Collapse>
    );
  };

  return { CommentsButton, Comments };
};
