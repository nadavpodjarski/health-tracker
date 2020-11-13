import React, { FC } from "react";
import { TextField, Grid } from "@material-ui/core";
import InputNumberFormat from "../../../../../../../common/components/input-number-format";
const Duration: FC<{
  duration: number | string;
  onChange: (duration: number | string) => void;
}> = ({ duration, onChange }) => {
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <Grid item xs={4}>
      <TextField
        variant="outlined"
        placeholder="Duration"
        helperText="* minutes"
        onChange={onChangeHandler}
        value={duration}
        InputProps={{
          inputComponent: InputNumberFormat as any
        }}
        FormHelperTextProps={{
          style: {
            marginLeft: 0
          }
        }}
      />
    </Grid>
  );
};

export default Duration;
