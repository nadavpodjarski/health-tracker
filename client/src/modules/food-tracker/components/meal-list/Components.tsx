import React, { FC } from "react";
import { Grid, Typography } from "@material-ui/core";
import { MealComponent } from "../../../../types/food";

const Components: FC<{ components: MealComponent[] }> = ({ components }) => {
  return (
    <>
      {components.map((component) => {
        return (
          <Grid item xs={6} sm={4} style={{ overflow: "auto" }}>
            <Typography noWrap>
              {` ${component.food} ${component.amount}${component.metric} `}
            </Typography>
          </Grid>
        );
      })}
    </>
  );
};

export default Components;
