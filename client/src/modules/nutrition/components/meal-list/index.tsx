import React, { FC, useState } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  makeStyles,
  Theme,
  Paper,
  Grid,
  ListItemText
} from "@material-ui/core";

import ListActionButtons from "./components/list-action-button";
import Loader from "../../../../common/components/loader";
import Type from "./components/Type";
import Ingredients from "./components/Ingredients";
import Time from "./components/Time";

import DeleteModalContent from "../modals/delete-modal-content";
import EditModalContent from "../modals/edit-meal-modal-content";

import { Meal, Meals, MealDoc } from "../../../../types/nutrition";
import { useModal } from "../../../../common/hooks/useModal";

import * as _ from "lodash";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflowY: "auto",
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
  },
  actionButtonWrapper: {
    height: "100%",
    position: "absolute",
    right: 8,
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
      paddingTop: "16px"
    }
  }
}));

const MealsList: FC<{
  isLoading: boolean;
  meals: Meals;
  onDeleteMeal: (docId: string) => Promise<any>;
  onEditMeal: (meal: Meal, docId: string) => Promise<any>;
}> = ({ isLoading, meals, onDeleteMeal, onEditMeal }) => {
  const [mealIdToBeDeleted, setMealIdToBeDeleted] = useState<string>("");
  const [mealDocToBeUpdated, setMealDocToBeUpdated] = useState<MealDoc | null>(
    null
  );

  const [editModalToggler, EditModal] = useModal();
  const [deleteModalToggler, DeleteModal] = useModal();

  const classes = useStyles();

  const setDeleteMeal = (docId: string) => {
    setMealIdToBeDeleted(docId);
    deleteModalToggler();
  };

  const onConfirmDelete = async (docId: string) => {
    await onDeleteMeal(docId);
    setMealIdToBeDeleted("");
    deleteModalToggler();
  };

  const onCancelDelete = () => {
    setMealIdToBeDeleted("");
    deleteModalToggler();
  };

  const setEditMeal = (item: MealDoc) => {
    setMealDocToBeUpdated(item);
    editModalToggler();
  };

  const onCancelEdit = () => {
    setMealDocToBeUpdated(null);
    editModalToggler();
  };

  const onConfirmEdit = async (meal: Meal) => {
    if (mealDocToBeUpdated?.id) {
      await onEditMeal(meal, mealDocToBeUpdated.id);
      setMealDocToBeUpdated(null);
      editModalToggler();
    }
  };

  return (
    <List
      component={Paper}
      className={classes.root}
      elevation={1}
      subheader={<li />}
    >
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
                      style={{
                        padding: "18px 12px"
                      }}
                      divider
                      component={Grid}
                      container
                      justify="space-between"
                    >
                      <Grid item xs={6} md={2} style={{ minWidth: "250px" }}>
                        <ListItemText
                          secondary={<Time time={item.meal.date} />}
                        >
                          <Type type={item.meal.type} />
                        </ListItemText>
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
                        {item.meal.comments}
                      </Grid>

                      <Grid
                        item
                        container
                        md={1}
                        className={classes.actionButtonWrapper}
                        spacing={2}
                        justify="flex-end"
                      >
                        <ListActionButtons
                          deleteHandler={(event) => setDeleteMeal(item.id)}
                          editHandler={(event) =>
                            setEditMeal(_.cloneDeep(item))
                          }
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
          <Loader title="Fetching Meals" />
        </ListItem>
      )}

      {/*Delete Modal*/}
      {mealIdToBeDeleted ? (
        <DeleteModal width={500}>
          <DeleteModalContent
            onCancelDelete={onCancelDelete}
            onConfirmDelete={(event) => onConfirmDelete(mealIdToBeDeleted)}
          />
        </DeleteModal>
      ) : (
        ""
      )}

      {/*Edit Modal*/}
      {mealDocToBeUpdated ? (
        <EditModal width={1200}>
          <EditModalContent
            onCancelEdit={onCancelEdit}
            onConfirmEdit={onConfirmEdit}
            mealToBeUpdated={mealDocToBeUpdated.meal as Meal}
            toggler={editModalToggler}
          />
        </EditModal>
      ) : (
        ""
      )}
    </List>
  );
};

export default MealsList;
