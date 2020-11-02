import React, { FC, useState } from "react";
import {
  Select,
  Button,
  IconButton,
  Typography,
  Grid,
  MenuItem,
  TextareaAutosize
} from "@material-ui/core";
import MealComponent from "../meal-ingredient";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { colors } from "../../../../main/theme/colors";

import * as nutritionUtils from "../../../../utilities/nutrition";
import { useDatePicker } from "../../../../common/hooks/useDatePicker";

import { useDispatch } from "react-redux";
import * as nutritionActions from "../../../../redux/trackers/nutrition/actions";
import moment from "moment";

import { Meal, MealTypes } from "../../../../types/nutrition";

const mealTypes = [
  { const: "Breakfast", value: 0 },
  { const: "Lunch", value: 1 },
  { const: "Dinner", value: 2 },
  { const: "Easy meal/Snack", value: 3 }
];

const AddDishModalContent: FC<{ addMealModalToggler: () => void }> = ({
  addMealModalToggler
}) => {
  const dispatch = useDispatch();
  const { DateTimePicker } = useDatePicker();
  const [state, setState] = useState<Meal>({
    type: mealTypes[0].value as MealTypes,
    ingredients: [nutritionUtils.makeNewMealIngredient()],
    comments: "",
    date: moment().toDate()
  });

  const addMealIngredientHandler = () => {
    const newIngredient = nutritionUtils.makeNewMealIngredient();
    setState((prevState) => ({
      ...prevState,
      ingredients: [newIngredient, ...prevState.ingredients]
    }));
  };

  const deleteMealIngredientHandler = (id: string) => {
    if (state.ingredients.length === 1) addMealModalToggler();
    setState((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients.filter((ing) => ing.id !== id)]
    }));
  };

  const changeMealIngredientHandler = (
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
      const ingredients = [...state.ingredients];
      const selectedIngredient = ingredients.find((ing) => ing.id === id);
      Object.assign(selectedIngredient, { [property]: value });
      setState((prevState) => ({
        ...prevState,
        ingredients
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
    setState((prevState) => ({
      ...prevState,
      type: value as MealTypes
    }));
  };

  const mealTimeChangeHandler = (date: Date | null) => {
    if (date) {
      setState((prevState) => ({
        ...prevState,
        date
      }));
    }
  };

  const doneHandler = async () => {
    if (state.ingredients[0].item || state.ingredients.length > 1) {
      dispatch(nutritionActions.addMeal(state));
      addMealModalToggler();
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
          {mealTypes.map((item) => {
            return <MenuItem value={item.value}>{item.const}</MenuItem>;
          })}
        </Select>
      </div>

      {/*Meal Components*/}
      <div style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
        <Typography>Add Ingredient</Typography>
        <div>
          <IconButton onClick={addMealIngredientHandler}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
      </div>

      <Grid container spacing={3}>
        {state.ingredients.map((ing, i) => {
          return (
            <Grid item xs={12} md={6}>
              <MealComponent
                ingredient={ing}
                deleteHandler={(event) => deleteMealIngredientHandler(ing.id)}
                onChange={(event) => changeMealIngredientHandler(event, ing.id)}
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
            onClick={addMealModalToggler}
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
            {"Done"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddDishModalContent;
