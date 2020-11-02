import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import { MealIngredient } from "../../../../types/nutrition";
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

const Components: FC<{ ingredients: MealIngredient[] }> = ({ ingredients }) => {
  const classes = useStyles();
  return (
    <>
      {ingredients.map((ingredient, i) => {
        return (
          // <Grid item style={{ margin: "8px 0px" }}>
          <Typography component="span" className={classes.span}>
            {`${ingredient.item} ${ingredient.amount}${
              ingredient.amount ? ingredient.metric : ""
            }`}
          </Typography>
          // </Grid>
        );
      })}
    </>
  );
};

export default Components;
