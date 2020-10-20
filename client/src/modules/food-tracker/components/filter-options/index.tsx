import React, { FC } from "react";
import { Direction } from "../../../../main/types";
import { useDatePicker } from "../../../../common/hooks/useDatePicker";
import { Paper } from "@material-ui/core";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";

const FilterOptions: FC<
  {
    onDateRangeChange: (date: DateRange) => void;
  } & Direction
> = ({ direction, onDateRangeChange }) => {
  const { DateRangePicker } = useDatePicker();

  return (
    <>
      <Paper
        style={{
          display: "flex",
          direction: direction,
          margin: "16px 0",
          padding: "0 8px",
          alignItems: "center"
        }}
        elevation={1}
      >
        <DateRangePicker onChange={onDateRangeChange} />
      </Paper>
    </>
  );
};

export default FilterOptions;
