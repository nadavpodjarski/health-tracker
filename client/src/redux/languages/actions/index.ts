import * as types from "../constants";

export const setLanguage = (lang: any) => {
  return {
    type: types.SET_LANGUAGE,
    payload: lang
  };
};
