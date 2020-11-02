import React, { useEffect, Dispatch } from "react";

import AddMealModalContent from "./components/add-meal-modal-content";
import MainHeader from "../../common/components/tracker-main-header";
import MealsList from "./components/meal-list";
import FilterOptions from "./components/filter-options";

import { colors } from "../../main/theme/colors";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useModal } from "../../common/hooks/useModal";
import { useDispatch, useSelector, useStore } from "react-redux";

import * as nutritionActions from "../../redux/trackers/nutrition/actions";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { IStore } from "../../types/redux";
import { Meal } from "../../types/nutrition";

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

const Nutrition = () => {
  const { isLoading, nutrition, dateRange } = useSelector(
    (state: IStore) => state.nutrition
  );
  const [addMealModalToggler, AddMealModal] = useModal();

  const classes = useStyles();
  const dispatch = useDispatch();

  const moduleTitle = "Nutrition";
  const modalButtonText = "Add Meal";

  useEffect(() => {
    dispatch(nutritionActions.fetchMeals(dateRange));
    //eslint-disable-next-line
  }, [dateRange]);

  const onDateRangeChange = (date: DateRange) => {
    if (!date[0]) date[0] = new Date();
    if (!date[1]) date[1] = new Date();
    dispatch(nutritionActions.setDateRange(date));
  };

  const onAddMeal = async (meal: Meal) => {
    const res = dispatch(nutritionActions.addMeal(meal));
    return res;
  };

  const onDeleteMeal = (docId: string) => {
    dispatch(nutritionActions.deleteMeal(docId));
  };

  const onEditMeal = (meal: Meal) => {};

  return (
    <div className={classes.moduleRoot}>
      {/*Header*/}
      <MainHeader title={moduleTitle} />

      {/*Open Modal Button*/}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          height: "80px"
        }}
      >
        <Button
          onClick={addMealModalToggler}
          className={classes.openModalButton}
        >
          {modalButtonText}
        </Button>
      </div>

      {/*Filter options*/}
      <FilterOptions {...{ onDateRangeChange, dateRange }} />

      {/*Food List*/}
      <MealsList
        onDeleteMeal={onDeleteMeal}
        isLoading={isLoading}
        meals={nutrition}
      />

      {/*Add Meal Modal*/}
      <AddMealModal width={1200}>
        <AddMealModalContent
          addMealModalToggler={addMealModalToggler}
          onAddMeal={onAddMeal}
        />
      </AddMealModal>
    </div>
  );
};

export default Nutrition;
