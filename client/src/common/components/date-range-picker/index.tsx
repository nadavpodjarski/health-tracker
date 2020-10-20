import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import {
  DateRangeDelimiter,
  DesktopDateRangePicker,
  LocalizationProvider
} from "@material-ui/pickers";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";

const DateRangePicker: FC<{ onChange: (date: DateRange) => void }> = ({
  onChange
}) => {
  const [value, setValue] = React.useState<any>([Date.now(), Date.now()]);

  const onChangeHandler = (date: DateRange) => {
    if (date) {
      setValue(date);
      onChange(date);
    }
  };
  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <DesktopDateRangePicker
        disableFuture
        value={value}
        inputFormat="dd/MM/yyyy"
        onChange={onChangeHandler}
        allowSameDateSelection={true}
        renderInput={(startProps, endProps) => (
          <div
            style={{ padding: "16px 0", display: "flex", alignItems: "center" }}
          >
            <TextField {...startProps} label="Start" helperText="" />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} label="End" helperText="" />
          </div>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateRangePicker;
