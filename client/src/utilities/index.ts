import { DateRange } from "@material-ui/pickers/DateRangePicker/RangeTypes";
import { DateRange as dRange } from "../main/types/";
export const makeLocaleDateString = (date: Date) => {
  if (!date) return null;
  return date.toLocaleDateString("en-GB");
};

export const makeLocaleTimeString = (date: Date) => {
  if (!date) return null;
  return date.toLocaleTimeString("en-GB");
};

export const parseDateRange = (dateRange: DateRange): dRange => {
  return {
    startAt: makeLocaleDateString(dateRange[0] as Date),
    endAt: makeLocaleDateString(dateRange[1] as Date)
  };
};
