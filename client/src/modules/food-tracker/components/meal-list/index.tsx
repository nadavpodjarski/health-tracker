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
import { Meals } from "../../../../types/food";
import ListActionButtons from "../list-action-button";
import Loader from "../../../../common/components/loader";
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

const MealsList: FC<{ isLoading: boolean; meals: Meals }> = ({
  isLoading,
  meals
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [chosenMealToBeDeleted, setChosenMealToBeDeleted] = useState<string>(
    ""
  );

  const [deleteModalOpener, DeleteModal] = useModal();

  const setDeleteMeal = (docId: string) => {
    setChosenMealToBeDeleted(docId);
    deleteModalOpener();
  };

  const onConfirmDelete = (docId: string) => {
    deleteModalOpener();
    dispatch(foodActions.deleteMeal(docId));
    setChosenMealToBeDeleted("");
  };

  const onCancelDelete = () => {
    deleteModalOpener();
    setChosenMealToBeDeleted("");
  };

  return (
    <List
      className={classes.foodList}
      component={Paper}
      elevation={3}
      subheader={<li />}
    >
      {!isLoading ? (
        <>
          {meals.map((mealsByDate, i) => {
            return (
              <li key={`section-${i}`} className={classes.listSection}>
                <ul className={classes.ul}>
                  <ListSubheader>{`${mealsByDate[0]}`}</ListSubheader>
                  {mealsByDate[1].map((item, i: number) => (
                    <ListItem
                      key={`item-${i}`}
                      component={Grid}
                      container
                      spacing={3}
                    >
                      <Grid item xs={3}>
                        <Typography variant="h6">
                          {item.data.meal.type}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} container style={{ overflowX: "auto" }}>
                        {item.data.meal.components.map((component) => {
                          return (
                            <Grid
                              item
                              xs={6}
                              sm={4}
                              style={{ overflow: "auto" }}
                            >
                              <Typography noWrap>
                                {` ${component.food} ${component.amount}${component.metric} `}
                              </Typography>
                            </Grid>
                          );
                        })}
                      </Grid>
                      <Grid item xs={1} container justify="center">
                        {item.data.meal.time}
                      </Grid>
                      <Grid item xs={2}>
                        <ListActionButtons
                          comments={item.data.meal.comments}
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
        <Divider style={{ background: colors.tourquize, margin: "16px 0" }} />
        <Grid container style={{ marginTop: "50px" }} spacing={2}>
          <Grid item xs={6} container justify="flex-end">
            <Button
              style={{
                background: colors.tourquize,
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
                color: colors.tourquize,
                border: `1px solid ${colors.tourquize}`
              }}
              onClick={() => onConfirmDelete(chosenMealToBeDeleted)}
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
