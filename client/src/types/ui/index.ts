export type AlertType = 'success' | 'info' | 'warning' | 'error' | undefined

export type SnackBarAlert = {
   type: AlertType
   msg: string
}
