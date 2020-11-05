import React, { FC } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useDatePicker } from "../../../../../../../common/hooks/useDatePicker";
import { useStyles } from "../../styles";

const MealDatePicker: FC<{
  onAcceptMealTime: (date: Date) => void;
  date?: Date;
}> = ({ onAcceptMealTime, date }) => {
  const { DateTimePicker } = useDatePicker();

  const classes = useStyles();

  const onAccept = (date: Date | null) => {
    if (date) {
      onAcceptMealTime(date);
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
        <DateTimePicker onAcceptMealTime={onAccept} date={date} />
      </Grid>
    </Grid>
  );
};

export default MealDatePicker;
