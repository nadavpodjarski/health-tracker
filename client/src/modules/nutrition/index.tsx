import React, { useEffect } from "react";

import AddMealModalContent from "./components/modals/add-meal-modal-content";
import MainHeader from "../../common/components/tracker-main-header";
import MealsList from "./components/meal-list";
import FilterOptions from "./components/filter-options";

import { colors } from "../../main/theme/colors";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { useModal } from "../../common/hooks/useModal";
import { useDispatch, useSelector } from "react-redux";

import * as nutritionActions from "../../redux/trackers/nutrition/actions";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { IStore } from "../../types/redux";
import { Meal } from "../../types/nutrition";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    moduleRoot: {
      display: "flex",
      flex: 1,
      minHeight: 0,
      justifyContent: "center",
      width: "100%"
    },
    innerModule: {
      width: "100%",
      maxWidth: "1200px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative"
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
    date[0] = date[0] || new Date();
    date[1] = date[1] || new Date();
    dispatch(nutritionActions.setDateRange(date));
  };

  const onAddMeal = async (meal: Meal) => {
    return dispatch(nutritionActions.addMeal(meal));
  };

  const onDeleteMeal = async (docId: string) => {
    return dispatch(nutritionActions.deleteMeal(docId));
  };

  const onEditMeal = async (meal: Meal, docId: string) => {
    return dispatch(nutritionActions.editMeal(meal, docId));
  };

  return (
    <div className={classes.moduleRoot}>
      <Box className={classes.innerModule}>
        {/*Header*/}
        <MainHeader title={moduleTitle} />

        {/*Open Modal Button*/}
        <Box display="flex" alignItems="flex-start" height={80} width="100%">
          <Button
            onClick={addMealModalToggler}
            className={classes.openModalButton}
          >
            {modalButtonText}
          </Button>
        </Box>

        {/*Filter options*/}
        <FilterOptions {...{ onDateRangeChange, dateRange }} />

        {/*Food List*/}
        <MealsList
          onDeleteMeal={onDeleteMeal}
          onEditMeal={onEditMeal}
          isLoading={isLoading}
          meals={nutrition}
        />
      </Box>
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
