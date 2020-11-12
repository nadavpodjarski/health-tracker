export enum SymptomsScale {
  mild = 1,
  moderate = 2,
  high = 3,
  severe = 4,
  disabling = 5
}

export type Symptom = {
  duartion: number;
  date: Date;
  description: string;
  scale: SymptomsScale;
  name: string;
};

export type SymptomDoc = {
  symptom: Symptom;
  id: string;
};

export type SymptomsByDate = { _id: string; meals: SymptomDoc[] };

export type Symptoms = SymptomsByDate[];
