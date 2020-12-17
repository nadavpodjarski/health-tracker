import { Meals } from '../nutrition'
import { Symptoms } from '../symptoms'
import { ParsedDateRange } from '..'
import { SnackBarAlert } from '../ui'
import { IUser } from '../auth'

export interface IAuth {
   currentUser: IUser | null
   isInitializing: boolean
}

export interface INutrition {
   meals: Meals
   dateRange: ParsedDateRange
   isLoading: boolean
   err: any
}

export interface ISymptoms {
   symptoms: Symptoms
   dateRange: ParsedDateRange
   isLoading: boolean
   err: any
}

export interface IHome {
   isSending: boolean
   err: any
}

export interface IStore {
   auth: IAuth
   nutrition: INutrition
   ui: IUiState
   symptoms: ISymptoms
   home: IHome
}

export type Action = {
   type: string
   payload: any
}

export interface IUiState {
   snackbar: SnackBarAlert
   theme: boolean
}
