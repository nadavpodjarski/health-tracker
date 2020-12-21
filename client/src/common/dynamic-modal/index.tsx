import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as uiActions from '../../redux/ui/actions'

import LoginForm from '../components/login-form'
import SpringModal from '../components/spring-modal'

import AddMealModal from '../../modules/main-app/nutrition/modals/add-meal-modal'
import DeleteMealModal from '../../modules/main-app/nutrition/modals/delete-modal'
import EditMealModal from '../../modules/main-app/nutrition/modals/edit-meal-modal'

import AddSymptomModal from '../../modules/main-app/symptoms/modals/add-symptom-modal'
import DeleteSymptomModal from '../../modules/main-app/symptoms/modals/delete-symptom-modal'
import EditSymptomModal from '../../modules/main-app/symptoms/modals/edit-symptom-modal'

const DynamicModal: FC = () => {
   const { modal } = useSelector((state) => state.ui)
   const dispatch = useDispatch()

   let ModalContent = null

   const closeModal = () => {
      dispatch(uiActions.closeModal())
   }

   switch (modal.type) {
      case 'login-form':
         ModalContent = LoginForm
         break
      case 'add-meal':
         ModalContent = AddMealModal
         break
      case 'delete-meal':
         ModalContent = DeleteMealModal
         break
      case 'edit-meal':
         ModalContent = EditMealModal
         break
      case 'add-symptom':
         ModalContent = AddSymptomModal
         break
      case 'delete-symptom':
         ModalContent = DeleteSymptomModal
         break
      case 'edit-symptom':
         ModalContent = EditSymptomModal
         break
   }

   return ModalContent ? (
      <SpringModal
         open={!!modal.type}
         modalToggler={closeModal}
         width={modal?.options?.width}
      >
         <ModalContent {...modal.options?.props} />
      </SpringModal>
   ) : null
}

export default DynamicModal
