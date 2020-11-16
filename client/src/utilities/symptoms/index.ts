import moment from "moment";

import { Symptom, SymptomsScale } from "../../types/symptoms";

export const makeNewSymptom = (): Symptom => {
  return {
    date: moment().toDate(),
    duration: "",
    description: "",
    scale: SymptomsScale["Mild"],
    name: ""
  };
};

export const isValidSymptom = (symptom: Symptom) => {
  const error = {
    symptom: !!symptom.name,
    date: symptom.date
  };

  if (!error.symptom || !error.date) return "";
  else return "ok";
};

export const symptomScale = [
  { const: "Mild", value: 1 },
  { const: "Moderate", value: 2 },
  { const: "High", value: 3 },
  { const: "Severe", value: 4 },
  { const: "Disabling", value: 5 }
];
