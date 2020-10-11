import * as types from "../types";

export const setLanguage = (lang: any) => {
  return {
    type: types.SET_LANGUAGE,
    payload: lang,
  };
};
