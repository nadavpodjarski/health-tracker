import * as types from "../types";
import languages from "../../../main/languages/languagesMeta.json";

const initialState = {
  chosenLanguage: languages.english,
  languages: languages,
};

type Action = {
  type: string;
  payload: any;
};

export const languagesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.SET_LANGUAGE:
      return {
        ...state,
        chosenLanguage: Object.entries(languages).find(
          (lang) => lang[1].const === action.payload
        )?.[1],
      };
    default:
      return state;
  }
};
