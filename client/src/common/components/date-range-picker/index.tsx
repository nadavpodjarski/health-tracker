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

const parseTimes = (startAt: string, endAt: string) => {
  const parsedStart = moment(startAt, ["DD/MM/YYYY"]).valueOf();
  const parsedEnd = moment(endAt, ["DD/MM/YYYY"]).valueOf();
  return [parsedStart, parsedEnd];
};

const DateRangePicker: FC<{
  onChange: (date: DateRange) => void;
  startAt: string | null;
  endAt: string | null;
}> = ({ onChange, startAt, endAt }) => {
  const [value, setValue] = useState<any>(
    parseTimes(startAt as string, endAt as string)
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
              value={startAt}
              label="Start"
              helperText=""
              style={{ maxWidth: "150px" }}
            />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField
              {...endProps}
              value={endAt}
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
