import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as uiActions from '../../redux/ui/actions'

import SpringModal from '../components/spring-modal'
import { matchModal } from './modals.map'

const DynamicModal: FC = () => {
   const { modal } = useSelector((state) => state.ui)
   const dispatch = useDispatch()

   const ModalContent = matchModal(modal.type)

   const closeModal = () => {
      dispatch(uiActions.closeModal())
   }

   return ModalContent ? (
      <SpringModal
         open={!!modal.type}
         closeModal={closeModal}
         width={modal?.options?.width}
      >
         <ModalContent {...modal.options?.props} />
      </SpringModal>
   ) : null
}

export default DynamicModal
