import languages from "../languagesMeta.json";

export const dictionary = {
  menu: {
    foodTracker: {
      [languages.hebrew.const]: "מעקב אוכל",
      [languages.english.const]: "Food",
    },
    sportTracker: {
      [languages.hebrew.const]: " מעקב ספורט",
      [languages.english.const]: "Sport",
    },
  },
  foodTracker: {
    mainHeader: {
      [languages.hebrew.const]: "מעקב אחרי האוכל",
      [languages.english.const]: "Food Track",
    },
    modalButton: {
      [languages.hebrew.const]: "הוסף ארוחה",
      [languages.english.const]: "Add Meal",
    },
    modalMealsSelect: {
      [languages.hebrew.const]: [
        { const: "ארוחת בוקר", value: "breakfast" },
        { const: "ארוחת צהריים", value: "lunch" },
        { const: "ארוחת ערב", value: "dinner" },
        { const: "ארוחה קלה/נשנוש", value: "snack" },
      ],
      [languages.english.const]: [
        { const: "Breakfast", value: "breakfast" },
        { const: "Lunch", value: "lunch" },
        { const: "Dinner", value: "dinner" },
        { const: "Easy meal/Snack", value: "snack" },
      ],
    },
  },
  sportTracker: {
    mainHeader: {
      [languages.hebrew.const]: "מעקב אחרי הספורט",
      [languages.english.const]: "Sport Track",
    },
    modalButton: {
      [languages.hebrew.const]: "הוסף ספורט",
      [languages.english.const]: "Add Sport",
    },
  },
};
