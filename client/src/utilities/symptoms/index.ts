import moment from "moment";

import { Symptom, SymptomsScale } from "../../types/symptoms";

export const makeNewSymptom = (): Symptom => {
  return {
    date: moment().toDate(),
    duartion: 0,
    description: "",
    scale: SymptomsScale["mild"],
    name: ""
  };
};
