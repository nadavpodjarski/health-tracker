import React, { FC } from "react";
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Divider
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { MealIngredient } from "../../../../types/nutrition";

const metrics = ["gr", "oz", "ml"];

const MealComponent: FC<{
  ingredient: MealIngredient;
  deleteHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>
  ) => void;
}> = ({ ingredient, deleteHandler, onChange }) => {
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      style={{ paddingTop: "8px" }}
    >
      <Grid item xs={6} sm={6}>
        <TextField
          onChange={onChange}
          name="item"
          value={ingredient.item}
          variant="outlined"
          placeholder="Food"
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <TextField
          onChange={onChange}
          name="amount"
          value={ingredient.amount}
          variant="outlined"
          placeholder="Amount"
        />
      </Grid>
      <Grid item xs={6} sm={2}>
        <Select
          onChange={onChange}
          name="metric"
          value={ingredient.metric}
          variant="outlined"
          style={{ width: "100%" }}
        >
          {metrics.map((metric) => {
            return <MenuItem value={metric}>{metric}</MenuItem>;
          })}
        </Select>
      </Grid>
      <Grid item xs={6} sm={1}>
        {" "}
        <IconButton onClick={deleteHandler}>
          <DeleteIcon />
        </IconButton>{" "}
      </Grid>
      <Grid item xs={12}>
        <Divider style={{ margin: "8px 0" }} />
      </Grid>
    </Grid>
  );
};

export default MealComponent;
