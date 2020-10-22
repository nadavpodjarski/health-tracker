export type Direction = {
  direction?:
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "ltr"
    | "rtl"
    | undefined;
};

export type DateRange = {
  startAt: string | null;
  endAt: string | null;
};
