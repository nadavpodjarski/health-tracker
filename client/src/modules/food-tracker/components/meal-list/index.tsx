import React, { FC, useState } from "react";
import {
  List,
  Typography,
  ListSubheader,
  ListItem,
  Grid,
  makeStyles,
  Theme,
  Paper,
  Button,
  Divider
} from "@material-ui/core";

import ListActionButtons from "./list-action-button";
import Loader from "../../../../common/components/loader";
import Type from "./Type";
import Components from "./Components";
import Time from "./Time";

import { Meal, Meals } from "../../../../types/food";
import { useModal } from "../../../../common/hooks/useModal";
import { colors } from "../../../../main/theme";

import { useDispatch } from "react-redux";
import * as foodActions from "../../../../redux/trackers/food/actions";

const useStyles = makeStyles((theme: Theme) => ({
  foodList: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    flex: 1,
    minHeight: 0,
    scrollbarWidth: "none",
    marginBottom: theme.spacing(1),
    padding: "0 16px"
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

  const [mealToBeDeleted, setMealToBeDeleted] = useState<string>("");
  const [mealToBeUpdated, setMealToBeUpdated] = useState<Meal>();

  const setDeleteMeal = (docId: string) => {
    setMealToBeDeleted(docId);
    deleteModalToggler();
  };

  const onConfirmDelete = (docId: string) => {
    deleteModalToggler();
    dispatch(foodActions.deleteMeal(docId));
    setMealToBeDeleted("");
  };

  const onCancelDelete = () => {
    deleteModalToggler();
    setMealToBeDeleted("");
  };

  const setUpdateMeal = (meal: Meal) => {};

  const onCofirmUpdate = (meal: Meal) => {};

  const onCancelUpdate = () => {};

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
                      component={Grid}
                      container
                      spacing={3}
                    >
                      <Grid item xs={3}>
                        <Type type={item.meal.type} />
                      </Grid>
                      <Grid item xs={6} container style={{ overflowX: "auto" }}>
                        <Components components={item.meal.components} />
                      </Grid>
                      <Grid item xs={1} container justify="center">
                        <Time time={item.meal.time} />
                      </Grid>
                      <Grid item xs={2}>
                        <ListActionButtons
                          comments={item.meal.comments}
                          onDelete={(event) => setDeleteMeal(item.id)}
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
      <DeleteModal width={450}>
        <Typography style={{ margin: "16px 0" }} variant="h6" noWrap>
          Are you sure you want to delete ?
        </Typography>
        <Divider style={{ background: colors.ming, margin: "16px 0" }} />
        <Grid container style={{ marginTop: "50px" }} spacing={2}>
          <Grid item xs={6} container justify="flex-end">
            <Button
              style={{
                background: colors.ming,
                color: "white"
              }}
              onClick={onCancelDelete}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6} container>
            <Button
              style={{
                background: "inherit",
                color: colors.ming,
                border: `1px solid ${colors.ming}`
              }}
              onClick={() => onConfirmDelete(mealToBeDeleted)}
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </DeleteModal>
    </List>
  );
};

export default MealsList;
