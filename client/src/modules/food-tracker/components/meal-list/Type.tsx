import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import { MealTypes } from "../../../../types/food";
import { colors } from "../../../../main/theme/colors";

const typeColors = {
  [MealTypes["Breakfast"]]: [colors.maxYellowRed],
  [MealTypes["Dinner"]]: [colors.kobe],
  [MealTypes["Lunch"]]: [colors.radicalRed],
  [MealTypes["Easy meal/Snack"]]: [colors.tourquize]
};

const Type: FC<{ type: MealTypes }> = ({ type }) => {
  return (
    <Typography
      variant="h6"
      style={{
        textDecoration: "underline",
        textDecorationThickness: "3px",
        fontWeight: "bold",
        textUnderlinePosition: "under",
        textDecorationColor: typeColors[type][0]
      }}
    >
      {MealTypes[type]}
    </Typography>
  );
};

export default Type;
