import React, { FC } from "react";
import {
  ListItem,
  ListItemText,
  Grid,
  makeStyles,
  Theme,
  ListItemIcon,
  Box
} from "@material-ui/core";

import Type from "./Type";
import Ingredients from "./Ingredients";
import Time from "./Time";
import ListActionButtons from "./list-action-button";

import { useComments } from "./Comments";

import { MealDoc } from "../../../../../types/nutrition";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.paper,
    margin: "6px 0"
  },

  actionButtonWrapper: {
    height: "100%",
    position: "absolute",
    right: 24,
    zIndex: 100,
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
      paddingTop: "16px"
    }
  }
}));

const MealListItem: FC<{
  i: number;
  item: MealDoc;
  setDeleteMeal: (docId: string) => void;
  setEditMeal: (item: MealDoc) => void;
}> = ({ i, item, setDeleteMeal, setEditMeal }) => {
  const classes = useStyles();

  const { CommentsButton, Comments } = useComments();

  return (
    <Box className={classes.root}>
      <ListItem
        key={`item-${i}`}
        style={{
          padding: "16px 16px"
        }}
        divider
        component={Grid}
        container
      >
        <Grid
          item
          xs={6}
          md={2}
          container
          style={{ minWidth: "250px" }}
          justify="space-around"
        >
          <ListItemText secondary={<Time time={item.meal.date} />}>
            <Type type={item.meal.type} />
          </ListItemText>
          <ListItemIcon>
            {item.meal.comments ? <CommentsButton /> : ""}
          </ListItemIcon>
        </Grid>

        <Grid
          item
          container
          xs={12}
          md={9}
          spacing={1}
          style={{ whiteSpace: "nowrap" }}
        >
          <Ingredients ingredients={item.meal.ingredients} />
        </Grid>

        <Grid item container xs={12}>
          <Comments comments={item.meal.comments} />
        </Grid>

        <Grid
          item
          container
          md={1}
          className={classes.actionButtonWrapper}
          spacing={3}
        >
          <ListActionButtons
            deleteHandler={(event) => setDeleteMeal(item.id)}
            editHandler={(event) => setEditMeal(item)}
          />
        </Grid>
      </ListItem>
    </Box>
  );
};

export default MealListItem;
