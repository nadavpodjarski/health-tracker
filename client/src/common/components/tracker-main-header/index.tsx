import React, { FC } from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import { Direction } from "../../../main/types";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    height: "200px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "100px",
    },
  },
  title: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
}));

const MainHeader: FC<{ title: string } & Direction> = ({
  title,
  direction,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.header} style={{ direction }}>
      <Typography className={classes.title} noWrap variant="h2">
        {title}
      </Typography>
    </div>
  );
};

export default MainHeader;
