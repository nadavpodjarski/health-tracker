import languages from "../languagesMeta.json";

export const langs = {
  menu: {
    foodTracker: {
      [languages.hebrew.const]: "מעקב אוכל",
      [languages.english.const]: "Food Tracker",
    },
    sportTracker: {
      [languages.hebrew.const]: " מעקב ספורט",
      [languages.english.const]: "Sport tracker",
    },
  },
  foodTracker: {
    mainHeader: {
      [languages.hebrew.const]: "מעקב אחרי האוכל",
      [languages.english.const]: "Food Track",
    },
    modalButton: {
      [languages.hebrew.const]: "הוסף ארוחה",
      [languages.english.const]: "Add Dish",
    },
    modalMealsSelect: {
      [languages.hebrew.const]: [
        "ארוחת בוקר",
        "ארוחת צהריים",
        "ארוחת ערב",
        "ארוחה קלה/נשנוש",
      ],
      [languages.english.const]: [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Easy meal/Snack",
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
