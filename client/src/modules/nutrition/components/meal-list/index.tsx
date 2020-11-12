import React, { FC, useState } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  makeStyles,
  Theme,
  Box,
  Typography
} from "@material-ui/core";

import Loader from "../../../../common/components/loader";

import MealListItem from "./components/ListItem";
import DeleteModalContent from "../modals/delete-modal-content";
import EditModalContent from "../modals/edit-meal-modal-content";
import AddModalContent from "../modals/add-meal-modal-content";

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
    padding: "10px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 0"
    }
  },
  subHeader: {
    background: theme.palette.background.paper,
    borderRadius: "50px",
    boxShadow: theme.shadows[3],
    padding: "0 15px",
    border: `2px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.85)"
    }
  }
}));

const MealsList: FC<{
  isLoading: boolean;
  meals: Meals;
  onCopyMeal: (meal: Meal) => Promise<any>;
  onDeleteMeal: (docId: string) => Promise<any>;
  onEditMeal: (meal: Meal, docId: string) => Promise<any>;
}> = ({ isLoading, meals, onDeleteMeal, onEditMeal, onCopyMeal }) => {
  const [mealIdToBeDeleted, setMealIdToBeDeleted] = useState<string>("");
  const [copiedMeal, setCopiedMeal] = useState<Meal>();
  const [mealDocToBeUpdated, setMealDocToBeUpdated] = useState<MealDoc | null>(
    null
  );

  const [editModalToggler, EditModal] = useModal();
  const [deleteModalToggler, DeleteModal] = useModal();
  const [copyModalToggler, CopyModal] = useModal();

  const classes = useStyles();

  const setDeleteMeal = (docId: string) => {
    setMealIdToBeDeleted(docId);
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

  const setCopyMeal = (meal: Meal) => {
    meal.date = new Date();
    setCopiedMeal(meal);
    copyModalToggler();
  };

  const onConfirmDelete = async (docId: string) => {
    try {
      await onDeleteMeal(docId);
      setMealIdToBeDeleted("");
      deleteModalToggler();
    } catch (err) {}
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
        meals.length ? (
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
                        setCopyMeal={setCopyMeal}
                      />
                    ))}
                  </ul>
                </li>
              );
            })}
          </>
        ) : (
          <Box
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h5">No Meals</Typography>
          </Box>
        )
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
            mealToBeUpdated={mealDocToBeUpdated.meal}
            toggler={editModalToggler}
          />
        </EditModal>
      ) : (
        ""
      )}

      {/*Copy Modal*/}
      {copiedMeal ? (
        <CopyModal width={1200}>
          <AddModalContent
            onAddMeal={onCopyMeal}
            meal={copiedMeal as Meal}
            modalToggler={copyModalToggler}
          />
        </CopyModal>
      ) : (
        ""
      )}
    </List>
  );
};

export default MealsList;
