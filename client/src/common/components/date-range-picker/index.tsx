import React, { FC, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import {
  DateRangeDelimiter,
  MobileDateRangePicker,
  LocalizationProvider
} from "@material-ui/pickers";
import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import moment from "moment";

const parseTimes = (startAt: Date, endAt: Date) => {
  const parsedStart = moment(startAt).valueOf();
  const parsedEnd = moment(endAt).valueOf();
  return [parsedStart, parsedEnd];
};

const DateRangePicker: FC<{
  onChange: (date: DateRange) => void;
  startAt: Date | null;
  endAt: Date | null;
}> = ({ onChange, startAt, endAt }) => {
  const [value, setValue] = useState<any>(
    parseTimes(startAt as Date, endAt as Date)
  );

  useEffect(() => {
    if (startAt && endAt) {
      setValue(parseTimes(startAt, endAt));
    }
  }, [startAt, endAt]);

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
            style={{ padding: "16px", display: "flex", alignItems: "center" }}
          >
            <TextField
              {...startProps}
              label=""
              variant="standard"
              helperText=""
              style={{ maxWidth: "120px" }}
            />
            <DateRangeDelimiter> {">>"} </DateRangeDelimiter>
            <TextField
              {...endProps}
              label=""
              helperText=""
              variant="standard"
              style={{ maxWidth: "120px" }}
            />
          </div>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateRangePicker;
