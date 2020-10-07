import * as types from "../types/languages";
import languages from "../../../main/languages/languages.json";

const initialState = {
  chosenLanguage: languages.hebrew,
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
