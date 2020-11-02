import moment from "moment";

export const getStartDayDate = (start: Date | string): Date => {
  return moment(start).startOf("day").toDate();
};

export const getEndDayDate = (end: Date | string): Date => {
  return moment(end).endOf("day").toDate();
};

export const stringToDate = (date: string): Date => {
  return moment(date).toDate();
};

export const formatDate = (date: Date | string) => {
  return moment(date).format("DD/MM/YYYY");
};
