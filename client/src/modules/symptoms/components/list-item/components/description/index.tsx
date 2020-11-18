import React, { FC, SetStateAction, Dispatch } from "react";
import { Button, makeStyles, Chip, Paper } from "@material-ui/core";

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
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  noDescriptionChip: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "16px"
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

  return isAvailable ? (
    <Button
      onClick={openHandler}
      className={classes.decriptionButton}
      endIcon={isOpen ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
    >
      Description
    </Button>
  ) : (
    <Chip
      component={Paper}
      icon={<NotInterestedIcon />}
      label="DESCRIPTION"
      className={classes.noDescriptionChip}
    />
  );
};

export default Description;
