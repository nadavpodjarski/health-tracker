import * as types from "../types/languages";

export const setLanguage = (lang: any) => {
  return {
    type: types.SET_LANGUAGE,
    payload: lang,
  };
};
