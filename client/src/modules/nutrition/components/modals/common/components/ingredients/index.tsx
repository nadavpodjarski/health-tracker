import React, { FC } from "react";
import { Typography, IconButton, Grid } from "@material-ui/core";
import MealIngredient from "../meal-ingredient";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { MealIngredient as Ingredient } from "../../../../../../../types/nutrition";

const MealIngredients: FC<{
  ingredients: Ingredient[];
  onAddMealIngredient: () => void;
  onDeleteMealIngredient: (id: string) => void;
  onChangeMealIngredient: (
    property: string,
    value: string,
    index: number
  ) => void;
}> = ({
  ingredients,
  onAddMealIngredient,
  onDeleteMealIngredient,
  onChangeMealIngredient
}) => {
  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>,
    index: number
  ) => {
    const { name: property, value } = event.target;
    if (typeof property === "string" && typeof value === "string") {
      onChangeMealIngredient(property, value, index);
    }
  };

  return (
    <>
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <Typography>Add Ingredient</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={onAddMealIngredient}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {ingredients.map((ing, i) => {
          return (
            <Grid item xs={12} md={6} key={`modal_ingredient-${i}`}>
              <MealIngredient
                ingredient={ing}
                onDelete={(event) => onDeleteMealIngredient(ing.id)}
                onChange={(event) => onChange(event, i)}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default MealIngredients;
