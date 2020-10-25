import React, { useEffect } from "react";

import AddMealModalContent from "./components/modal-content";
import MainHeader from "../../common/components/tracker-main-header";
import MealsList from "./components/meal-list";
import FilterOptions from "./components/filter-options";

import { colors } from "../../main/theme";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

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
      <FilterOptions {...{ onDateRangeChange, dateRange }} />

      {/*Food List*/}
      <MealsList isLoading={isLoading} meals={meals} />

      {/*Add Meal Modal*/}
      <AddMealModal width={1200}>
        <AddMealModalContent handleOpen={handleOpen} />
      </AddMealModal>
    </div>
  );
};

export default FoodTracker;
