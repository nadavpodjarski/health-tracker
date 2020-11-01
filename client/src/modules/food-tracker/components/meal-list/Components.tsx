import React, { FC } from "react";
import { Grid, Typography } from "@material-ui/core";
import { MealComponent } from "../../../../types/food";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  span: {
    padding: "8px 14px",
    background: theme.palette.background.default,
    borderRadius: "25px",
    border: "1px solid rgba(0,0,0,0.3)",
    cursor: "pointer",
    margin: "8px 0"
  }
}));

const Components: FC<{ components: MealComponent[] }> = ({ components }) => {
  const classes = useStyles();
  return (
    <>
      {components.map((component, i) => {
        return (
          // <Grid item style={{ margin: "8px 0px" }}>
          <Typography component="span" className={classes.span}>
            {`${component.food} ${component.amount}${
              component.amount ? component.metric : ""
            }`}
          </Typography>
          // </Grid>
        );
      })}
    </>
  );
};

export default Components;
