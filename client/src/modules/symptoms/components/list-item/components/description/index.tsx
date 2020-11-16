import React, { FC, SetStateAction, Dispatch } from "react";
import { Button, makeStyles } from "@material-ui/core";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

const useStyles = makeStyles((theme) => ({
  decriptionButton: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    "&:disabled": {
      background: theme.palette.divider,
      color: theme.palette.common.white
    }
  }
}));

const Description: FC<{
  isAvailable: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isAvailable, isOpen, setIsOpen }) => {
  const classes = useStyles();

  const openHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Button
      onClick={openHandler}
      disabled={!isAvailable}
      className={classes.decriptionButton}
      endIcon={
        !isAvailable ? (
          <NotInterestedIcon />
        ) : isOpen ? (
          <ArrowDownwardIcon />
        ) : (
          <ArrowUpwardIcon />
        )
      }
    >
      Description
    </Button>
  );
};

export default Description;
