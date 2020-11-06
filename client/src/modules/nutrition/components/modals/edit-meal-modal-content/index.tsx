import React, { FC, useState } from "react";

import { Meal, MealTypes } from "../../../../../types/nutrition";
import * as nutritionUtils from "../../../../../utilities/nutrition";

import SelectMealType from "../common/components/select-type";
import MealIngredients from "../common/components/ingredients";
import MealComments from "../common/components/comments";
import MealDatePicker from "../common/components/date";
import EditMealActionButton from "./action-buttons";

const AddMealModalContent: FC<{
  onCancelEdit: () => void;
  onConfirmEdit: (meal: Meal) => Promise<any>;
  mealToBeUpdated: Meal;
}> = ({ onCancelEdit, onConfirmEdit, mealToBeUpdated }) => {
  const [state, setState] = useState<Meal>(mealToBeUpdated);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

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
    if (state.ingredients.length === 1) return onCancelEdit();
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
    setIsUpdating(true);
    try {
      await onConfirmEdit(state);
    } catch (err) {
      // TODO handle err
      console.log(err);
      setIsUpdating(false);
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
      <MealDatePicker onAcceptMealTime={onChangeMealTime} date={state.date} />

      {/*Action Buttons*/}
      <EditMealActionButton
        onConfirm={onConfirm}
        onCancel={onCancelEdit}
        isUpdating={isUpdating}
      />
    </div>
  );
};

export default AddMealModalContent;
