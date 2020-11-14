import React, { FC } from "react";
import { useDatePicker } from "../../../../common/hooks/useDatePicker";
import { Paper, makeStyles } from "@material-ui/core";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { ParsedDateRange } from "../../../../types";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "60px",
    marginBottom: "12px",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  }
}));

const FilterOptions: FC<{
  onDateRangeChange: (date: DateRange) => void;
  dateRange: ParsedDateRange;
}> = ({ onDateRangeChange, dateRange }) => {
  const classes = useStyles();
  const { DateRangePicker } = useDatePicker();

  return (
    <>
      <Paper className={classes.root} elevation={5}>
        <DateRangePicker
          onChange={onDateRangeChange}
          startAt={dateRange.startAt}
          endAt={dateRange.endAt}
        />
      </Paper>
    </>
  );
};

export default FilterOptions;
