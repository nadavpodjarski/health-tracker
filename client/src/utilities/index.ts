import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { ParsedDateRange } from "../types";
import { v4 as uuidv4 } from "uuid";

import moment from "moment";

export const makeLocaleDateString = (date: Date) => {
  if (!date) return "";
  return moment(date).format("DD/MM/YYYY");
};

export const makeLocaleTimeString = (date: Date) => {
  if (!date) return "";
  return moment(date).format("HH:mm");
};

export const parseDateRange = (dateRange: DateRange): ParsedDateRange => {
  return {
    startAt: moment(dateRange[0] as Date)
      .startOf("day")
      .toDate(),
    endAt: moment(dateRange[1] as Date)
      .endOf("day")
      .toDate()
  };
};

export const uuid = () => uuidv4();
