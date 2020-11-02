import React, { FC } from "react";
import { Typography, IconButton, Grid } from "@material-ui/core";
import MealIngredient from "../../../meal-ingredient";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { MealIngredient as Ingredient } from "../../../../../../types/nutrition";

const MealIngredients: FC<{
  ingredients: Ingredient[];
  onAddMealIngredient: () => void;
  onDeleteMealIngredient: (id: string) => void;
  onChangeMealIngredient: (property: string, value: string, id: string) => void;
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
    id: string
  ) => {
    const { name: property, value } = event.target;
    if (typeof property === "string") {
      onChangeMealIngredient(property, value as string, id);
    }
  };

  return (
    <>
      <div>
        <Typography>Add Ingredient</Typography>
        <div>
          <IconButton onClick={onAddMealIngredient}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
      </div>

      <Grid container spacing={3}>
        {ingredients.map((ing, i) => {
          return (
            <Grid item xs={12} md={6}>
              <MealIngredient
                ingredient={ing}
                onDelete={(event) => onDeleteMealIngredient(ing.id)}
                onChange={(event) => onChange(event, ing.id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default MealIngredients;
