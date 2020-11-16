import * as types from "../constants";
import { ISymptoms, Action } from "../../../../types/redux";
import * as appUtils from "../../../../utilities";

const initialState: ISymptoms = {
  symptoms: [],
  isLoading: false,
  err: null,
  dateRange: appUtils.parseDateRange([new Date(), new Date()])
};

export const symptomsReducer = (
  state = initialState,
  action: Action
): ISymptoms => {
  switch (action.type) {
    case types.ADD_SYMPTOM:
      return {
        ...state
      };
    case types.GET_SYMPTOMS:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_SYMPTOMS_SUCCESS:
      return {
        ...state,
        symptoms: action.payload,
        isLoading: false
      };
    case types.DELETE_SYMPTOM_SUCCESS: {
      const symptoms = state.symptoms
        .map((symptomsByDate) => {
          return {
            ...symptomsByDate,
            symptoms: symptomsByDate.symptoms.filter(
              (symptomDoc) => symptomDoc.id !== action.payload
            )
          };
        })
        .filter((symptomsByDate) => symptomsByDate.symptoms.length);
      return {
        ...state,
        symptoms
      };
    }
    case types.SET_SYMPTOMS_DATE_RANGE:
      return {
        ...state,
        dateRange: appUtils.parseDateRange(action.payload)
      };
    default:
      return state;
  }
};
