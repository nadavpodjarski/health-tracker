import React, { FC } from "react";
import { ListItem, Grid, makeStyles, Box, Typography } from "@material-ui/core";

import Type from "./components/type";
import Ingredients from "./components/ingredients";
import Time from "./components/time";
import ListActionButtons from "./components/action-buttons";

import { MealDoc, Meal } from "../../../../types/nutrition";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    margin: "6px 0",
    boxShadow: theme.shadows[0],
    borderRadius: "4px",
    border: `1px solid ${theme.palette.divider}`
  },

  actionButtonWrapper: {
    height: "100%"
  }
}));

const MealListItem: FC<{
  item: MealDoc;
  setDeleteMeal: (docId: string) => void;
  setEditMeal: (item: MealDoc) => void;
  setCopyMeal: (meal: Meal) => void;
}> = ({ item, setDeleteMeal, setEditMeal, setCopyMeal }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ListItem
        key={`item-${item.id}`}
        style={{
          padding: "16px 16px"
        }}
        component={Grid}
        container
      >
        <Grid
          container
          item
          xs
          style={{ padding: "12px 0 24px 0" }}
          alignItems="center"
        >
          <Grid item xs={6} container alignItems="center">
            <Box display="inline-block">
              <Type type={item.meal.type} />
              <Typography
                component="span"
                color="textSecondary"
                style={{ margin: "0 5px", fontSize: "12px" }}
              >
                at
              </Typography>
              <Time time={item.meal.date} />
            </Box>
          </Grid>

          <Grid
            item
            container
            xs
            justify="flex-end"
            className={classes.actionButtonWrapper}
            spacing={3}
          >
            <ListActionButtons
              deleteHandler={() => setDeleteMeal(item.id)}
              editHandler={() => setEditMeal(item)}
              copyHanlder={() => setCopyMeal(item.meal)}
              comments={item.meal.comments}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          xs={12}
          spacing={1}
          style={{ whiteSpace: "nowrap" }}
        >
          <Ingredients ingredients={item.meal.ingredients} />
        </Grid>
      </ListItem>
    </Box>
  );
};

export default MealListItem;
