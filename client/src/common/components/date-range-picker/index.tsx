import React, { FC, useState, useEffect } from "react";
import { TextField, Divider, Box } from "@material-ui/core";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import EventIcon from "@material-ui/icons/Event";
import {
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
            style={{
              padding: "16px",
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(0,0,0,0.2)"
            }}
          >
            <Box paddingRight="16px" display="flex" alignItems="center">
              <EventIcon />
            </Box>
            <TextField
              {...startProps}
              label=""
              variant="standard"
              helperText=""
              style={{ maxWidth: "120px" }}
            />
            <Divider
              orientation="vertical"
              style={{ height: "auto", margin: "0 16px", alignSelf: "stretch" }}
            />
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
