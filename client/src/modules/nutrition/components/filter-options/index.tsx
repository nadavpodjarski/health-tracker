import React, { FC } from "react";
import { useDatePicker } from "../../../../common/hooks/useDatePicker";
import { Box } from "@material-ui/core";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { ParsedDateRange } from "../../../../types";

import { useTheme } from "@material-ui/core";

const FilterOptions: FC<{
  onDateRangeChange: (date: DateRange) => void;
  dateRange: ParsedDateRange;
}> = ({ onDateRangeChange, dateRange }) => {
  const { DateRangePicker } = useDatePicker();
  const theme = useTheme();

  return (
    <>
      <Box
        height={100}
        display="flex"
        margin="16px 0"
        padding="8px 16px"
        alignItems="center"
        boxShadow="0 0 10px 3px rgba(0,0,0,0.05)"
        style={{ background: theme.palette.background.paper }}
      >
        <DateRangePicker
          onChange={onDateRangeChange}
          startAt={dateRange.startAt}
          endAt={dateRange.endAt}
        />
      </Box>
    </>
  );
};

export default FilterOptions;
