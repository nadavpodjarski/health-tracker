import React, { FC, useState } from "react";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import {
  DateRangeDelimiter,
  MobileDateRangePicker,
  LocalizationProvider
} from "@material-ui/pickers";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";

const DateRangePicker: FC<{ onChange: (date: DateRange) => void }> = ({
  onChange
}) => {
  const [value, setValue] = useState<any>([Date.now(), Date.now()]);

  const onAcceptHandler = (date: DateRange) => {
    if (date) {
      onChange(date);
      setValue(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <MobileDateRangePicker
        disableFuture
        value={value}
        onAccept={(date: any) => onAcceptHandler(date)}
        inputFormat="dd/MM/yyyy"
        onChange={() => {}}
        allowSameDateSelection={true}
        renderInput={(startProps, endProps) => (
          <div
            style={{ padding: "16px 0", display: "flex", alignItems: "center" }}
          >
            <TextField
              {...startProps}
              label="Start"
              helperText=""
              style={{ maxWidth: "150px" }}
            />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField
              {...endProps}
              label="End"
              helperText=""
              style={{ maxWidth: "150px" }}
            />
          </div>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateRangePicker;
