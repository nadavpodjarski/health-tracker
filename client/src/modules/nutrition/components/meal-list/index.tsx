import React, { FC, useState } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  makeStyles,
  Theme,
  Paper,
  ListItemText,
  Grid
} from "@material-ui/core";

import ListActionButtons from "./list-action-button";
import Loader from "../../../../common/components/loader";
import Type from "./Type";
import Components from "./Components";
import Time from "./Time";
import DeleteModalContent from "../delete-modal-content";
import EditModalContent from "../edit-meal-modal-content";

import { Meal, Meals } from "../../../../types/nutrition";
import { useModal } from "../../../../common/hooks/useModal";

const useStyles = makeStyles((theme: Theme) => ({
  foodList: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflowY: "auto",
    overflowX: "hidden",
    flex: 1,
    minHeight: 0,
    scrollbarWidth: "none",
    marginBottom: theme.spacing(1),
    padding: "0 16px",
    maxWidth: "100%"
  },
  listSection: {
    backgroundColor: "inherit",
    fontSize: "22px",
    overflowX: "auto"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
}));

const MealsList: FC<{
  isLoading: boolean;
  meals: Meals;
  onDeleteMeal: (dicId: string) => void;
}> = ({ isLoading, meals, onDeleteMeal }) => {
  const classes = useStyles();
  const [deleteModalToggler, DeleteModal] = useModal();
  const [editModalToggler, EditModal] = useModal();

  const [mealToBeDeleted, setMealToBeDeleted] = useState<string>("");
  const [mealToBeUpdated, setMealToBeUpdated] = useState<Meal | null>();

  const setDeleteMeal = (docId: string) => {
    setMealToBeDeleted(docId);
    deleteModalToggler();
  };

  const onConfirmDelete = (docId: string) => {
    deleteModalToggler();
    onDeleteMeal(docId);
    setMealToBeDeleted("");
  };

  const onCancelDelete = () => {
    deleteModalToggler();
    setMealToBeDeleted("");
  };

  const setEditMeal = (meal: Meal) => {
    setMealToBeUpdated(meal);
    editModalToggler();
  };

  const onEditMeal = () => {};

  const onCancelUpdate = () => {
    editModalToggler();
    setMealToBeUpdated(null);
  };

  return (
    <Paper elevation={1} className={classes.foodList}>
      <List style={{ height: "100%", maxWidth: "100%" }} subheader={<li />}>
        {!isLoading ? (
          <>
            {meals?.map((mealsByDate, i) => {
              return (
                <li key={`section-${i}`} className={classes.listSection}>
                  <ul className={classes.ul}>
                    <ListSubheader>{`${mealsByDate._id}`}</ListSubheader>
                    {mealsByDate.meals.map((item, i: number) => (
                      <ListItem
                        key={`item-${i}`}
                        divider
                        style={{
                          padding: "18px 12px"
                        }}
                      >
                        <Grid item xs={2}>
                          <Type type={item.meal.type} />
                        </Grid>
                        <Grid item xs={8} container spacing={1}>
                          <Grid container spacing={2}>
                            <Components ingredients={item.meal.ingredients} />
                          </Grid>
                        </Grid>
                        <Grid item xs={1} container justify="center">
                          <Time time={item.meal.date} />
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          container
                          justify="space-between"
                          spacing={2}
                        >
                          <ListActionButtons
                            comments={item.meal.comments}
                            deleteHandler={(event) => setDeleteMeal(item.id)}
                            editHandler={(event) => setEditMeal(item.meal)}
                          />
                        </Grid>
                      </ListItem>
                    ))}
                  </ul>
                </li>
              );
            })}
          </>
        ) : (
          <ListItem
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Loader />
          </ListItem>
        )}

        {/*Delete Modal*/}
        <DeleteModal width={500}>
          <DeleteModalContent
            onCancelDelete={onCancelDelete}
            onConfirmDelete={(event) => onConfirmDelete(mealToBeDeleted)}
          />
        </DeleteModal>

        {/*Edit Modal*/}
        <EditModal width={400}>
          <EditModalContent
            onCancelEdit={onCancelUpdate}
            mealToBeUpdated={mealToBeUpdated as Meal}
            onEditMeal={onEditMeal}
          />
        </EditModal>
      </List>
    </Paper>
  );
};

export default MealsList;
