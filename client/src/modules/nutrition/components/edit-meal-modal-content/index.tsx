import React, { FC, useState } from "react";
import { Meal } from "../../../../types/nutrition";
import * as nutritionUtils from "../../../../utilities/nutrition";

const EditModalContent: FC<{
  onCancelEdit: () => void;
  mealToBeUpdated: Meal;
}> = ({ onCancelEdit, mealToBeUpdated }) => {
  const [state, setState] = useState<Meal>(mealToBeUpdated);

  const addMealIngredientHandler = () => {
    const newIngredient = nutritionUtils.makeNewMealIngredient();
    setState((prevState) => ({
      ...prevState,
      ingredients: [newIngredient, ...prevState.ingredients]
    }));
  };

  console.log(mealToBeUpdated);
  return <div></div>;
};

export default EditModalContent;
