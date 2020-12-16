import React, { FC } from 'react'
import { useModal } from '../useModal'
import LoginForm from '../../components/login-form-modal'

export const useLoginFormModal = () => {
   const [modalToggler, Modal] = useModal()

   const LoginModal: FC = () => {
      return (
         <Modal>
            <LoginForm />
         </Modal>
      )
   }

   return [modalToggler, LoginModal] as const
}
