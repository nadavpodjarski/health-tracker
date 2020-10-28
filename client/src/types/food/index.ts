export enum MealTypes {
  breakfast = "Breakfast",
  lunch = "Lunch",
  dinner = "Dinner",
  snack = "Snack"
}

export type MealComponent = {
  id: string;
  food: string;
  amount: number | string;
  metric: "gr" | "oz" | "ml";
};

export type Meal = {
  date: string;
  time: string;
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
