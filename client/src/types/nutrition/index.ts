export enum MealTypes {
  Breakfast = 1,
  Lunch = 2,
  Dinner = 3,
  "Easy meal/Snack" = 4
}

export type MealIngredient = {
  id: string;
  item: string;
  amount: number | string;
  unit: "gr" | "oz" | "ml";
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
