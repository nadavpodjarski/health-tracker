import React, { FC, useState } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  makeStyles,
  Theme,
  Box
} from "@material-ui/core";

import Loader from "../../../../common/components/loader";

import MealListItem from "./components/ListItem";
import DeleteModalContent from "../modals/delete-modal-content";
import EditModalContent from "../modals/edit-meal-modal-content";

import { Meal, Meals, MealDoc } from "../../../../types/nutrition";
import { useModal } from "../../../../common/hooks/useModal";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    overflowY: "auto",
    flex: 1,
    minHeight: 0,
    scrollbarWidth: "none",
    marginBottom: theme.spacing(1),
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
  subHeaderWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0"
  },
  subHeader: {
    background: theme.palette.background.paper,
    borderRadius: "50px",
    boxShadow: "0 0 10px 3px rgba(0,0,0,0.1)",
    padding: "2px 15px",
    border: `1px solid ${theme.palette.primary.main}`
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
      component={Box}
      className={classes.root}
      subheader={<li />}
      disablePadding
    >
      {!isLoading ? (
        <>
          {meals?.map((mealsByDate, i) => {
            return (
              <li key={`section-${i}`} className={classes.listSection}>
                <ul className={classes.ul}>
                  <ListSubheader className={classes.subHeaderWrapper}>
                    <Box className={classes.subHeader}>{mealsByDate._id}</Box>
                  </ListSubheader>
                  {mealsByDate.meals.map((item, i: number) => (
                    <MealListItem
                      i={i}
                      item={item}
                      setDeleteMeal={setDeleteMeal}
                      setEditMeal={setEditMeal}
                    />
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
