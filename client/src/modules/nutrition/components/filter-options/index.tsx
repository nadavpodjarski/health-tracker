import React, { FC } from "react";
import { useDatePicker } from "../../../../common/hooks/useDatePicker";
import { Paper } from "@material-ui/core";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { ParsedDateRange } from "../../../../types";

const FilterOptions: FC<{
  onDateRangeChange: (date: DateRange) => void;
  dateRange: ParsedDateRange;
}> = ({ onDateRangeChange, dateRange }) => {
  const { DateRangePicker } = useDatePicker();

  return (
    <>
      <Paper
        style={{
          display: "flex",
          margin: "16px 0",
          padding: "0 8px",
          alignItems: "center"
        }}
        elevation={1}
      >
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
