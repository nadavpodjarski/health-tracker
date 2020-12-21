import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as uiActions from '../../redux/ui/actions'

import LoginForm from '../components/login-form'
import SpringModal from '../components/spring-modal'
import AddMealModal from '../../modules/main-app/nutrition/modals/add-meal-modal'
import DeleteMealModal from '../../modules/main-app/nutrition/modals/delete-modal'
import EditMealModal from '../../modules/main-app/nutrition/modals/edit-meal-modal'

const DynamicModal: FC = () => {
   const { modal } = useSelector((state) => state.ui)
   const dispatch = useDispatch()

   let Component = null

   const closeModal = () => {
      dispatch(uiActions.closeModal())
   }

   switch (modal.type) {
      case 'login-form':
         Component = LoginForm
         break
      case 'add-meal':
         Component = AddMealModal
         break
      case 'delete-meal':
         Component = DeleteMealModal
         break
      case 'edit-meal':
         Component = EditMealModal
         break
   }

   return Component ? (
      <SpringModal
         open={!!modal.type}
         modalToggler={closeModal}
         width={modal?.options?.width}
      >
         <Component {...modal.options?.props} />
      </SpringModal>
   ) : null
}

export default DynamicModal
