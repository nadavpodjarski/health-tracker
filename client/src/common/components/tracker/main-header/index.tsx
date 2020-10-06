import React, { FC } from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    height: "200px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
      height: "100px",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
}));

const MainHeader: FC<{ title: string }> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography className={classes.title} noWrap variant="h2">
        {title}
      </Typography>
    </div>
  );
};

export default MainHeader;
