import React, { FC, useState } from "react";

import * as nutritionUtils from "../../../../utilities/nutrition";

import { Meal, MealTypes } from "../../../../types/nutrition";
import { useStyles } from "./styles";

import SelectMealType from "./components/select-type";
import MealIngredients from "./components/ingredients";
import MealComments from "./components/comments";
import MealDatePicker from "./components/date";
import AddMealActionButtons from "./components/action-buttons";

const AddMealModalContent: FC<{
  addMealModalToggler: () => void;
  onAddMeal: (meal: Meal) => void;
}> = ({ addMealModalToggler, onAddMeal }) => {
  const [state, setState] = useState<Meal>(nutritionUtils.makeNewMeal());
  const classes = useStyles();

  // Add meal ingredient
  const onAddMealIngredient = () => {
    const newIngredient = nutritionUtils.makeNewMealIngredient();
    setState((prevState) => ({
      ...prevState,
      ingredients: [newIngredient, ...prevState.ingredients]
    }));
  };

  // Delete meal ingredient
  const onDeleteMealIngredient = (id: string) => {
    if (state.ingredients.length === 1) addMealModalToggler();
    setState((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients.filter((ing) => ing.id !== id)]
    }));
  };

  // onChange meal ingredient
  const onChangeMealIngredient = (
    property: string,
    value: string,
    id: string
  ) => {
    const ingredients = [...state.ingredients];
    const selectedIngredient = ingredients.find((ing) => ing.id === id);
    Object.assign(selectedIngredient, { [property]: value });
    setState((prevState) => ({
      ...prevState,
      ingredients
    }));
  };

  // onChange Comments
  const onChangeComments = (value: string) => {
    setState((prevState) => ({
      ...prevState,
      comments: value
    }));
  };

  // onChange meal type
  const onChangeMealType = (value: MealTypes) => {
    setState((prevState) => ({
      ...prevState,
      type: value
    }));
  };

  // onChange time
  const onChangeMealTime = (date: Date) => {
    setState((prevState) => ({
      ...prevState,
      date
    }));
  };

  // Confirm add
  const onConfirm = () => {
    if (state.ingredients[0].item || state.ingredients.length > 1) {
      onAddMeal(state);
      addMealModalToggler();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/*Meal Type*/}
      <SelectMealType type={state.type} onChangeMealType={onChangeMealType} />
      {/*Meal Ingredients*/}
      <MealIngredients
        ingredients={state.ingredients}
        onAddMealIngredient={onAddMealIngredient}
        onDeleteMealIngredient={onDeleteMealIngredient}
        onChangeMealIngredient={onChangeMealIngredient}
      />

      {/*Meal Comments*/}
      <MealComments onChangeComments={onChangeComments} />

      {/*Meal Date*/}
      <MealDatePicker onChangeMealTime={onChangeMealTime} />

      {/*Action Buttons*/}
      <AddMealActionButtons
        onConfirm={onConfirm}
        onCancel={addMealModalToggler}
      />
    </div>
  );
};

export default AddMealModalContent;
