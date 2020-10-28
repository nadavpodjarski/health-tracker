import React, { useEffect } from "react";

import AddMealModalContent from "./components/modal-content";
import MainHeader from "../../common/components/tracker-main-header";
import MealsList from "./components/meal-list";
import FilterOptions from "./components/filter-options";

import { colors } from "../../main/theme/colors";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useModal } from "../../common/hooks/useModal";
import { useDispatch, useSelector } from "react-redux";

import * as foodActions from "../../redux/trackers/food/actions";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { IStore } from "../../types/redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    moduleRoot: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      minHeight: 0
    },
    openModalButton: {
      fontSize: "20px",
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
  const { isLoading, foodTrack, dateRange } = useSelector(
    (state: IStore) => state.food
  );
  const [addMealModalToogler, AddMealModal] = useModal();

  const classes = useStyles();
  const dispatch = useDispatch();

  const moduleTitle = "Food Track";
  const modalButtonText = "Add Meal";

  useEffect(() => {
    dispatch(foodActions.fetchMeals(dateRange));
  }, [dateRange]);

  const onDateRangeChange = (date: DateRange) => {
    if (!date[0]) date[0] = new Date();
    if (!date[1]) date[1] = new Date();
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
        <Button
          onClick={addMealModalToogler}
          className={classes.openModalButton}
        >
          {modalButtonText}
        </Button>
      </div>

      {/*Filter options*/}
      <FilterOptions {...{ onDateRangeChange, dateRange }} />

      {/*Food List*/}
      <MealsList isLoading={isLoading} foodTrack={foodTrack} />

      {/*Add Meal Modal*/}
      <AddMealModal width={1200}>
        <AddMealModalContent addMealModalToogler={addMealModalToogler} />
      </AddMealModal>
    </div>
  );
};

export default FoodTracker;
