import React, { FC } from "react";
import { ListItem, Grid, makeStyles, Box, Typography } from "@material-ui/core";

import Type from "./Type";
import Ingredients from "./Ingredients";
import Time from "./Time";
import ListActionButtons from "./list-action-button";

import { MealDoc, Meal } from "../../../../../types/nutrition";
import * as _ from "lodash";

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
  i: number;
  item: MealDoc;
  setDeleteMeal: (docId: string) => void;
  setEditMeal: (item: MealDoc) => void;
  setCopyMeal: (meal: Meal) => void;
}> = ({ i, item, setDeleteMeal, setEditMeal, setCopyMeal }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ListItem
        key={`item-${i}`}
        style={{
          padding: "16px 16px"
        }}
        component={Grid}
        container
      >
        <Grid
          container
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
            xs={6}
            justify="flex-end"
            className={classes.actionButtonWrapper}
            spacing={3}
          >
            <ListActionButtons
              deleteHandler={() => setDeleteMeal(item.id)}
              editHandler={() => setEditMeal(item)}
              copyHanlder={() => setCopyMeal(_.cloneDeep(item.meal))}
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
