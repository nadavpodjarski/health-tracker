import React, { FC } from "react";
import { Typography, colors } from "@material-ui/core";
import { MealTypes } from "../../../../../../types/nutrition";

const typeColors = {
  [MealTypes["Breakfast"]]: [colors.blueGrey["400"]],
  [MealTypes["Dinner"]]: [colors.blueGrey["400"]],
  [MealTypes["Lunch"]]: [colors.blueGrey["400"]],
  [MealTypes["Easy meal/Snack"]]: [colors.blueGrey["400"]]
};

const Type: FC<{ type: MealTypes }> = ({ type }) => {
  return (
    <Typography
      component="span"
      variant="h6"
      style={{
        textDecoration: "underline",
        textDecorationThickness: "3px",
        fontWeight: "bold",
        textUnderlinePosition: "under",
        textDecorationColor: typeColors[type][0],
        whiteSpace: "nowrap",
        padding: "0",
        margin: "0"
      }}
    >
      {MealTypes[type]}
    </Typography>
  );
};

export default Type;
