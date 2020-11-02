import React, { FC } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useDatePicker } from "../../../../../../common/hooks/useDatePicker";
import { useStyles } from "../../styles";
const MealDatePicker: FC<{ onChangeMealTime: (date: Date) => void }> = ({
  onChangeMealTime
}) => {
  const { DateTimePicker } = useDatePicker();

  const classes = useStyles();
  const onChange = (date: Date | null) => {
    if (date) {
      onChangeMealTime(date);
    }
  };
  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.datePicker}
    >
      <Grid item style={{ padding: "8px 0" }}>
        <Typography>Set Date & Time</Typography>
      </Grid>
      <Grid item style={{ padding: "16px 0" }}>
        <DateTimePicker onChange={onChange} />
      </Grid>
    </Grid>
  );
};

export default MealDatePicker;
