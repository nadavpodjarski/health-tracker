import { ModalType } from '../../types/ui'

import AddMealModal from '../../modules/main-app/nutrition/modals/add-meal-modal'
import DeleteMealModal from '../../modules/main-app/nutrition/modals/delete-modal'
import EditMealModal from '../../modules/main-app/nutrition/modals/edit-meal-modal'

import AddSymptomModal from '../../modules/main-app/symptoms/modals/add-symptom-modal'
import DeleteSymptomModal from '../../modules/main-app/symptoms/modals/delete-symptom-modal'
import EditSymptomModal from '../../modules/main-app/symptoms/modals/edit-symptom-modal'

import LoginForm from '../components/login-form'

export const matchModal = (type: ModalType) => {
   switch (type) {
      case 'login-form':
         return LoginForm

      case 'add-meal':
         return AddMealModal

      case 'delete-meal':
         return DeleteMealModal

      case 'edit-meal':
         return EditMealModal

      case 'add-symptom':
         return AddSymptomModal

      case 'delete-symptom':
         return DeleteSymptomModal

      case 'edit-symptom':
         return EditSymptomModal
      default:
         return null
   }
}
