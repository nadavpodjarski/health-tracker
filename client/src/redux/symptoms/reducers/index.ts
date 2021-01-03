import * as types from '../constants'
import { ISymptoms, Action } from '../../../types/redux'
import * as appUtils from '../../../utilities'

import moment from 'moment'

import { SymptomsByDate } from '../../../types/symptoms'

const initialState: ISymptoms = {
   symptoms: [],
   isLoading: false,
   err: null,
   dateRange: appUtils.parseDateRange([new Date(), new Date()])
}

export const symptomsReducer = (
   state = initialState,
   action: Action
): ISymptoms => {
   switch (action.type) {
      case types.ADD_SYMPTOM:
         return {
            ...state
         }
      case types.GET_SYMPTOMS:
         return {
            ...state,
            isLoading: true
         }
      case types.GET_SYMPTOMS_SUCCESS:
         return {
            ...state,
            symptoms: action.payload,
            isLoading: false
         }
      case types.ADD_SYMPTOM_SUCCESS:
         const symptomDoc = action.payload
         if (
            !moment(symptomDoc.symptom.date).isBetween(
               state.dateRange.startAt,
               state.dateRange.endAt
            )
         ) {
            return state
         }
         const symptomDate = moment(symptomDoc.symptom.date).format(
            'DD/MM/YYYY'
         )
         const symptomsByDate = state.symptoms.find(
            (symptomsByDate) => symptomsByDate._id === symptomDate
         )

         if (symptomsByDate) {
            symptomsByDate?.symptoms.push(symptomDoc)
            symptomsByDate?.symptoms.sort((a, b) => {
               return (
                  new Date(a.symptom.date).getTime() -
                  new Date(b.symptom.date).getTime()
               )
            })
         } else {
            const newSymptomsByDate: SymptomsByDate = {
               _id: symptomDate,
               symptoms: [symptomDoc]
            }
            state.symptoms.push(newSymptomsByDate)
            state.symptoms.sort((a, b) => {
               return new Date(b._id).getTime() - new Date(a._id).getTime()
            })
         }
         return {
            ...state
         }
      case types.DELETE_SYMPTOM_SUCCESS: {
         const symptoms = state.symptoms
            .map((symptomsByDate) => {
               return {
                  ...symptomsByDate,
                  symptoms: symptomsByDate.symptoms.filter(
                     (symptomDoc) => symptomDoc.id !== action.payload
                  )
               }
            })
            .filter((symptomsByDate) => symptomsByDate.symptoms.length)
         return {
            ...state,
            symptoms
         }
      }
      case types.EDIT_SYMPTOM_SUCCESS: {
         const symptoms = state.symptoms.map((symptomsByDate) => {
            symptomsByDate.symptoms.map((symptomDoc) => {
               if (symptomDoc.id === action.payload.docId)
                  symptomDoc.symptom = action.payload.symptom
               return symptomDoc
            })
            return symptomsByDate
         })
         return {
            ...state,
            symptoms,
            err: null
         }
      }
      case types.CLEAN_SYMPTOMS_STAET:
         return {
            ...state,
            symptoms: []
         }
      case types.SET_SYMPTOMS_DATE_RANGE:
         return {
            ...state,
            dateRange: appUtils.parseDateRange(action.payload)
         }
      default:
         return state
   }
}
