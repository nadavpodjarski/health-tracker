import React, { useEffect } from "react";

import MainHeader from "../../common/components/tracker-main-header";
import { useModal } from "../../common/hooks/useModal";

import AddMealModalContent from "./components/modal-content";

import { colors } from "../../main/theme";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import FilterOptions from "./components/filter-options";

import { useDispatch, useSelector } from "react-redux";
import * as foodActions from "../../redux/trackers/food/actions";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { MealsByDate } from "../../main/types/food";
import { IStore } from "../../main/types/redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    moduleRoot: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      minHeight: 0
    },
    foodList: {
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
      flex: 1,
      minHeight: 0,
      scrollbarWidth: "none",
      marginBottom: theme.spacing(1)
    },
    listSection: {
      backgroundColor: "inherit"
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0
    },
    openModalButton: {
      fontSize: "24px",
      background: colors.tourquize,
      color: "white",
      "&:hover": {
        background: colors.tourquize
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px"
      }
    }
  })
);
const FoodTracker = () => {
  const { isLoading, meals, dateRange } = useSelector(
    (state: IStore) => state.food
  );
  const [OpenModalButton, handleOpen, AddMealModal] = useModal();

  const classes = useStyles();
  const dispatch = useDispatch();

  const moduleTitle = "Food Track";
  const modalButtonText = "Add Meal";

  useEffect(() => {
    dispatch(foodActions.fetchMeals(dateRange));
  }, [dateRange]);

  const onDateRangeChange = (date: DateRange) => {
    dispatch(foodActions.setDateRange(date));
  };

  return (
    <div className={classes.moduleRoot}>
      {/*Header*/}
      <MainHeader title={moduleTitle} />

      {/*Open Modal Button*/}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          height: "100px"
        }}
      >
        <OpenModalButton className={classes.openModalButton}>
          {modalButtonText}
        </OpenModalButton>
      </div>

      {/*Filter options*/}
      <FilterOptions {...{ onDateRangeChange }} />

      {/*Food List*/}
      <List
        className={classes.foodList}
        component={Paper}
        elevation={3}
        subheader={<li />}
      >
        {!isLoading ? (
          <>
            {meals.map((mealsByDate: MealsByDate, i: number) => {
              return (
                <li key={`section-${i}`} className={classes.listSection}>
                  <ul className={classes.ul}>
                    <ListSubheader>{`${mealsByDate[0]}`}</ListSubheader>
                    {mealsByDate[1].map((item: any, i: number) => (
                      <ListItem key={`item-${i}`}>
                        <ListItemText primary={`${item.data.meal.time}`} />
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
            Loading...
          </ListItem>
        )}
      </List>

      {/*Add Meal Modal*/}
      <AddMealModal width={1200}>
        <AddMealModalContent handleOpen={handleOpen} />
      </AddMealModal>
    </div>
  );
};

export default FoodTracker;
