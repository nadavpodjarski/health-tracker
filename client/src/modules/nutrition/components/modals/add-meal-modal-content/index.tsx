import React, { FC, useState } from "react";

import { Meal, MealTypes } from "../../../../../types/nutrition";
import * as nutritionUtils from "../../../../../utilities/nutrition";

import SelectMealType from "../common/components/select-type";
import MealIngredients from "../common/components/ingredients";
import MealComments from "../common/components/comments";
import MealDatePicker from "../common/components/date";
import AddMealActionButtons from "./action-buttons";

import { Typography, Box } from "@material-ui/core";

const AddMealModalContent: FC<{
  modalToggler: () => void;
  onAddMeal: (meal: Meal) => Promise<any>;
  meal: Meal;
}> = ({ modalToggler, onAddMeal, meal }) => {
  const [state, setState] = useState<Meal>(meal);
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
    if (state.ingredients.length === 1) return modalToggler();
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
      modalToggler();
    } catch (err) {
      // TODO handle err
      console.log(err);
      setIsSaving(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/*Meal Type*/}
      <Box display="flex" padding="16px 0" justifyContent="space-between">
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Add Meal
        </Typography>
        <SelectMealType type={state.type} onChangeMealType={onChangeMealType} />
      </Box>

      {/*Meal Ingredients*/}
      <MealIngredients
        ingredients={state.ingredients}
        onAddMealIngredient={onAddMealIngredient}
        onDeleteMealIngredient={onDeleteMealIngredient}
        onChangeMealIngredient={onChangeMealIngredient}
      />

      {/*Meal Comments*/}
      <MealComments
        onChangeComments={onChangeComments}
        comments={state.comments}
      />

      {/*Meal Date*/}
      <MealDatePicker onAcceptMealTime={onChangeMealTime} />

      {/*Action Buttons*/}
      <AddMealActionButtons
        onConfirm={onConfirm}
        onCancel={modalToggler}
        isSaving={isSaving}
        isValid={!!nutritionUtils.isValidMeal(state)}
      />
    </div>
  );
};

export default AddMealModalContent;
