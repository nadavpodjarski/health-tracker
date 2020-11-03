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
  const [isSaving, setIsSaving] = useState<boolean>(false);
  // Add Meal ingredient
  const onAddMealIngredient = () => {
    const newIngredient = nutritionUtils.makeNewMealIngredient();
    setState((prevState) => ({
      ...prevState,
      ingredients: [newIngredient, ...prevState.ingredients]
    }));
  };

  // Delete Meal Ingredient
  const onDeleteMealIngredient = (id: string) => {
    if (state.ingredients.length === 1) return addMealModalToggler();
    setState((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients.filter((ing) => ing.id !== id)]
    }));
  };

  // onChange Meal Ingredient
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

  // onChange Meal Comments
  const onChangeComments = (comments: string) => {
    setState((prevState) => ({
      ...prevState,
      comments
    }));
  };

  // onChange Meal Type
  const onChangeMealType = (type: MealTypes) => {
    setState((prevState) => ({
      ...prevState,
      type
    }));
  };

  // onChange Meal Time
  const onChangeMealTime = (date: Date) => {
    setState((prevState) => ({
      ...prevState,
      date
    }));
  };

  // Confirm Add Meal
  const onConfirm = async () => {
    setIsSaving(true);
    try {
      await onAddMeal(state);
      addMealModalToggler();
    } catch (err) {
      console.log(err);
    } finally {
      setIsSaving(false);
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
        isSaving={isSaving}
      />
    </div>
  );
};

export default AddMealModalContent;
