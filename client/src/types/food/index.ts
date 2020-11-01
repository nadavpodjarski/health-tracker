export enum MealTypes {
  Breakfast,
  Lunch,
  Dinner,
  "Easy meal/Snack"
}

export type MealComponent = {
  id: string;
  food: string;
  amount: number | string;
  metric: "gr" | "oz" | "ml";
};

export type Meal = {
  date: Date;
  components: MealComponent[];
  type: MealTypes;
  comments: string;
};

export type MealDoc = {
  meal: Meal;
  id: string;
};

export type MealsByDate = { _id: string; meals: MealDoc[] };

export type Meals = MealsByDate[];
