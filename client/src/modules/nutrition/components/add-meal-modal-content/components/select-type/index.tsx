import React, { FC } from "react";
import { Typography, Select, MenuItem } from "@material-ui/core";
import { useStyles } from "../../styles";
import { MealTypes } from "../../../../../../types/nutrition";
import * as nutritionUtils from "../../../../../../utilities/nutrition";

const SelectMealType: FC<{
  type: MealTypes;
  onChangeMealType: (value: MealTypes) => void;
}> = ({ onChangeMealType, type }) => {
  const classes = useStyles();

  const onChangeHandler = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    const { value } = event.target;
    onChangeMealType(value as MealTypes);
  };

  return (
    <div className={classes.select}>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        Select Meal
      </Typography>
      <Select variant="outlined" value={type} onChange={onChangeHandler}>
        {nutritionUtils.mealTypes.map((item) => {
          return <MenuItem value={item.value}>{item.const}</MenuItem>;
        })}
      </Select>
    </div>
  );
};

export default SelectMealType;
