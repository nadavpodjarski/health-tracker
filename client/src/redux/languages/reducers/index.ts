import * as types from '../constants'
import languages from '../../../main/languages-not-in-use-yet/languagesMeta.json'
import { Action } from '../../../types/redux'

const initialState = {
   chosenLanguage: languages.english,
   languages: languages
}

export const languagesReducer = (state = initialState, action: Action) => {
   switch (action.type) {
      case types.SET_LANGUAGE:
         return {
            ...state,
            chosenLanguage: Object.entries(languages).find(
               (lang) => lang[1].const === action.payload
            )?.[1]
         }
      default:
         return state
   }
}
