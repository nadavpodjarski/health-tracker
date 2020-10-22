export type MealTypes = "breakfast" | "lunch" | "dinner" | "snack";

export type MealComponent = {
  id: string;
  food: string;
  amount: number | string;
  metric: "gr" | "oz" | "ml";
};

export type Meal = {
  date: string | null;
  time: string | null;
  components: MealComponent[];
  type: MealTypes;
  comments: string;
};

export type MealDoc = {
  id: string;
  data: Meal & {
    author: {
      uid: string;
      displayName: string;
    };
    createdAt: string;
  };
};

export type MealsByDate = [string, MealDoc[]];

export type Meals = MealsByDate[];
