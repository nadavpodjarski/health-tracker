export enum SymptomsScale {
  Mild = 1,
  Moderate = 2,
  High = 3,
  Severe = 4,
  Disabling = 5
}

export type Symptom = {
  duration: number | string;
  date: Date;
  description: string;
  scale: SymptomsScale;
  name: string;
};

export type SymptomDoc = {
  symptom: Symptom;
  id: string;
};

export type SymptomsByDate = { _id: string; symptoms: SymptomDoc[] };

export type Symptoms = SymptomsByDate[];
