import React, { FC, useState } from "react";

import { Meal, MealTypes } from "../../../../types/nutrition";
import * as nutritionUtils from "../../../../utilities/nutrition";

import SelectMealType from "./components/select-type";
import MealIngredients from "./components/ingredients";
import MealComments from "./components/comments";
import MealDatePicker from "./components/date";
import AddMealActionButtons from "./components/action-buttons";

const AddMealModalContent: FC<{
  addMealModalToggler: () => void;
  onAddMeal: (meal: Meal) => Promise<any>;
}> = ({ addMealModalToggler, onAddMeal }) => {
  const [state, setState] = useState<Meal>(nutritionUtils.makeNewMeal());

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
    if (state.ingredients.length === 1) return addMealModalToggler();
    setState((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients.filter((ing) => ing.id !== id)]
    }));
  };

  // onChange meal ingredient
  const onChangeMealIngredient = (
    property: string,
    value: string,
    index: number
  ) => {
    const ingredients = [...state.ingredients];
    Object.assign(ingredients[index], { [property]: value });
    setState((prevState) => ({
      ...prevState,
      ingredients
    }));
  };

  // onChange Comments
  const onChangeComments = (comments: string) => {
    setState((prevState) => ({
      ...prevState,
      comments
    }));
  };

  // onChange meal type
  const onChangeMealType = (type: MealTypes) => {
    setState((prevState) => ({
      ...prevState,
      type
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
  const onConfirm = async () => {
    onAddMeal(state);
    addMealModalToggler();
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
