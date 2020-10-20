import React, { FC, useState } from "react";
import { Direction } from "../../../../main/types";
import {
  Select,
  Button,
  IconButton,
  Typography,
  Grid,
  MenuItem,
  TextareaAutosize
} from "@material-ui/core";
import MealComponent from "../meal-component";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { colors } from "../../../../main/theme";

import { dictionary } from "../../../../main/languages/app-dictionary";
import * as foodUtils from "../../utils";

import { useDatePicker } from "../../../../common/hooks/useDatePicker";

import { useSelector, useDispatch } from "react-redux";
import * as foodActions from "../../../../redux/trackers/food/actions";
import * as appUtils from "../../../../utilities";

const AddDishModalContent: FC<Direction & { handleOpen: () => void }> = ({
  direction,
  handleOpen
}) => {
  const dispatch = useDispatch();
  const { DateTimePicker } = useDatePicker();
  const { chosenLanguage } = useSelector((state: any) => state.languages);
  const [state, setState] = useState({
    type:
      dictionary.foodTracker.modalMealsSelect[chosenLanguage.const][0].value,
    components: [foodUtils.makeNewMealComponent()],
    comments: "",
    date: appUtils.makeLocaleDateString(new Date()),
    time: appUtils.makeLocaleTimeString(new Date())
  });

  const addMealComponentHandler = () => {
    const newComponent = foodUtils.makeNewMealComponent();
    setState((prevState) => ({
      ...prevState,
      components: [newComponent, ...prevState.components]
    }));
  };

  const deleteMealComponentHandler = (id: string) => {
    if (state.components.length === 1) handleOpen();
    setState((prevState) => ({
      ...prevState,
      components: [...prevState.components.filter((comp) => comp.id !== id)]
    }));
  };

  const changeMealComponentHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>,
    id: string
  ) => {
    const { name: property, value } = event.target;
    if (typeof property === "string") {
      const components = [...state.components];
      const selectedComponent = components.find((comp) => comp.id === id);
      Object.assign(selectedComponent, { [property]: value });
      setState((prevState) => ({
        ...prevState,
        components
      }));
    }
  };

  const changeCommentsHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setState((prevState) => ({
      ...prevState,
      comments: value
    }));
  };

  const mealTypeChangeHandler = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    const { value } = event.target;
    if (typeof value === "string") {
      setState((prevState) => ({
        ...prevState,
        type: value
      }));
    }
  };

  const mealTimeChangeHandler = (date: Date | null) => {
    if (date) {
      setState((prevState) => ({
        ...prevState,
        date: appUtils.makeLocaleDateString(date),
        time: appUtils.makeLocaleTimeString(date)
      }));
    }
  };

  const doneHandler = () => {
    if (state.components[0].food || state.components.length > 1) {
      dispatch(foodActions.addMeal(state));
      handleOpen();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/*Meal Type*/}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 0"
        }}
      >
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Select Meal
        </Typography>
        <Select
          variant="outlined"
          value={state.type}
          onChange={mealTypeChangeHandler}
        >
          {dictionary.foodTracker.modalMealsSelect[chosenLanguage.const].map(
            (item) => {
              return <MenuItem value={item.value}>{item.const}</MenuItem>;
            }
          )}
        </Select>
      </div>

      {/*Meal Components*/}
      <div style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
        <Typography>Add Component</Typography>
        <div>
          <IconButton onClick={addMealComponentHandler}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
      </div>

      <Grid container spacing={3}>
        {state.components.map((comp, i) => {
          return (
            <Grid item xs={12} md={6}>
              <MealComponent
                direction={direction}
                component={comp}
                deleteHandler={(event) => deleteMealComponentHandler(comp.id)}
                onChange={(event) => changeMealComponentHandler(event, comp.id)}
              />
            </Grid>
          );
        })}
      </Grid>

      <div style={{ paddingTop: "16px" }}>
        <div style={{ padding: "8px 0" }}>
          <Typography>Comments</Typography>
        </div>
        <div style={{ padding: "16px 0" }}>
          <TextareaAutosize
            rowsMax={8}
            rowsMin={6}
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              padding: "16px",
              fontSize: "18px",
              minHeight: "100px",
              fontFamily: "Poppins",
              maxHeight: "100px"
            }}
            onChange={(event) => changeCommentsHandler(event)}
          />
        </div>
      </div>

      {/*Meal Date*/}
      <Grid
        container
        direction="column"
        justify="center"
        style={{ padding: "16px 0 40px 0" }}
      >
        <Grid item style={{ padding: "8px 0" }}>
          <Typography>Set Date & Time</Typography>
        </Grid>
        <Grid item style={{ padding: "16px 0" }}>
          <DateTimePicker onChange={mealTimeChangeHandler} />
        </Grid>
      </Grid>

      {/*Action Buttons*/}
      <Grid container spacing={3}>
        <Grid item container xs={6} justify="flex-end">
          <Button
            style={{
              background: "inherit",
              color: colors.tourquize,
              border: `1px solid ${colors.tourquize}`,
              width: "80px"
            }}
            onClick={handleOpen}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item container xs={6} justify="flex-start">
          <Button
            style={{
              background: colors.tourquize,
              color: "white",
              width: "100px"
            }}
            onClick={() => doneHandler()}
          >
            Done
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddDishModalContent;
