export enum MealTypes {
  Breakfast,
  Lunch,
  Dinner,
  "Easy meal/Snack"
}

export type MealIngredient = {
  id: string;
  item: string;
  amount: number | string;
  metric: "gr" | "oz" | "ml";
};

export type Meal = {
  date: Date;
  ingredients: MealIngredient[];
  type: MealTypes;
  comments: string;
};

export type MealDoc = {
  meal: Meal;
  id: string;
};

export type MealsByDate = { _id: string; meals: MealDoc[] };

export type Meals = MealsByDate[];
