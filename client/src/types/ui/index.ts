import { CSSProperties } from 'react'

export type AlertType = 'success' | 'info' | 'warning' | 'error' | undefined

export type SnackBarAlert = {
   type: AlertType
   msg: string
}

export type ModalOptions = {
   props?: any
   width?: string | number
   style?: Pick<CSSProperties, 'background' | 'width'>
}

export type ModalType =
   | 'delete-meal'
   | 'add-meal'
   | 'edit-meal'
   | 'delete-symptom'
   | 'add-symptom'
   | 'edit-symptom'
   | 'login-form'
   | 'popup-message'
   | null
