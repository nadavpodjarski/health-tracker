import { Meals } from '../nutrition'
import { Symptoms } from '../symptoms'
import { ParsedDateRange } from '..'
import { SnackBarAlert } from '../ui'
import { IUser } from '../auth'
import { ModalOptions, ModalType } from '../../types/ui'

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
   ui: IUIState
   symptoms: ISymptoms
   home: IHome
}

export type Action = {
   type: string
   payload: any
}

export interface IUIState {
   snackbar: SnackBarAlert
   theme: boolean
   modal: {
      type: ModalType
      options?: ModalOptions
   }
}
