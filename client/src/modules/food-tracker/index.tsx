import React, { useEffect } from "react";

import MainHeader from "../../common/components/tracker-main-header";
import { useModal } from "../../common/hooks/useModal";
import { dictionary } from "../../main/languages/app-dictionary";

import AddMealModalContent from "./components/modal-content";

import { useSelector } from "react-redux";
import { colors } from "../../main/theme";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import FilterOptions from "./components/filter-options";

import { useDispatch } from "react-redux";
import * as foodActions from "../../redux/trackers/food/actions";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";

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
      marginBottom: theme.spacing(1)
    },
    listSection: {
      backgroundColor: "inherit"
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0
    }
  })
);

const FoodTracker = () => {
  const { chosenLanguage } = useSelector((state: any) => state?.languages);
  const { dateRange, isLoading } = useSelector(
    (state: any) => state?.trackers.food
  );
  const [OpenModalButton, handleOpen, AddMealModal] = useModal();

  const classes = useStyles();
  const dispatch = useDispatch();

  const direction = chosenLanguage?.direction;
  const moduleTitle = dictionary.foodTracker.mainHeader[chosenLanguage?.const];
  const modalButtonText =
    dictionary.foodTracker.modalButton[chosenLanguage?.const];

  useEffect(() => {
    dispatch(foodActions.fetchMeals(dateRange));
  }, [dateRange]);

  const onDateRangeChange = (date: DateRange) => {
    dispatch(foodActions.setDateRange(date));
  };

  return (
    <div className={classes.moduleRoot}>
      {/*Header*/}
      <MainHeader title={moduleTitle} direction={direction} />

      {/*Open Modal Button*/}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          height: "100px",
          direction: direction
        }}
      >
        <OpenModalButton
          style={{
            fontSize: "24px",
            background: colors.tourquize,
            color: "white"
          }}
        >
          {modalButtonText}
        </OpenModalButton>
      </div>

      {/*Filter options*/}
      <FilterOptions {...{ onDateRangeChange, direction }} />

      {/*Food List*/}
      <List
        className={classes.foodList}
        component={Paper}
        elevation={3}
        subheader={<li />}
      >
        {!isLoading ? (
          <>
            {[0, 1, 2, 3, 4].map((sectionId) => (
              <li key={`section-${sectionId}`} className={classes.listSection}>
                <ul className={classes.ul}>
                  <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                  {[0, 1, 2].map((item) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                      <ListItemText primary={`Item ${item}`} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
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
        <AddMealModalContent direction={direction} handleOpen={handleOpen} />
      </AddMealModal>
    </div>
  );
};

export default FoodTracker;
