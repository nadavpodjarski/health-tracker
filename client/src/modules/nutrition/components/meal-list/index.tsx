import React, { FC, useState } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  makeStyles,
  Theme,
  Paper,
  ListItemText
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

import { useDispatch } from "react-redux";
import * as nutritionActions from "../../../../redux/trackers/nutrition/actions";

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
    fontSize: "22px"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
}));

const MealsList: FC<{ isLoading: boolean; foodTrack: Meals }> = ({
  isLoading,
  foodTrack
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
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
    dispatch(nutritionActions.deleteMeal(docId));
    setMealToBeDeleted("");
  };

  const onCancelDelete = () => {
    deleteModalToggler();
    setMealToBeDeleted("");
  };

  const setUpdateMeal = (meal: Meal) => {
    setMealToBeUpdated(meal);
    editModalToggler();
  };

  const onCofirmUpdate = (meal: Meal) => {};

  const onCancelUpdate = () => {
    editModalToggler();
    setMealToBeUpdated(null);
  };

  return (
    <List
      className={classes.foodList}
      component={Paper}
      elevation={1}
      subheader={<li />}
    >
      {!isLoading ? (
        <>
          {foodTrack?.map((mealsByDate, i) => {
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
                      {/* <Grid container spacing={2} alignItems="center">
                        <Grid item xs={3}> */}
                      <ListItemText
                        style={{ minWidth: "250px", maxWidth: "250px" }}
                      >
                        <Type type={item.meal.type} />
                      </ListItemText>
                      {/* </Grid>
                        <Grid item xs={7} container spacing={1}> */}
                      <ListItemText style={{ flex: 1, minWidth: "400px" }}>
                        <Components ingredients={item.meal.ingredients} />
                      </ListItemText>
                      {/* </Grid>
                        <Grid item xs={1} container justify="center"> */}
                      <ListItemText style={{ maxWidth: "50px" }}>
                        <Time time={item.meal.date} />
                      </ListItemText>
                      {/* </Grid>
                        <Grid item xs={1}> */}
                      <ListItemText
                        style={{ marginRight: 0, maxWidth: "150px" }}
                      >
                        <ListActionButtons
                          comments={item.meal.comments}
                          deleteHandler={(event) => setDeleteMeal(item.id)}
                          editHandler={(event) => setUpdateMeal(item.meal)}
                        />
                      </ListItemText>

                      {/* </Grid>
                      </Grid> */}
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
          mealToBeUpdated={mealToBeUpdated}
        />
      </EditModal>
    </List>
  );
};

export default MealsList;
