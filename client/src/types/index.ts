export type Direction = {
   direction?:
      | '-moz-initial'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'unset'
      | 'ltr'
      | 'rtl'
      | undefined
}

export type ParsedDateRange = {
   startAt: Date
   endAt: Date
}

export interface IPrivateRoute {
   isLoggedIn: boolean
   redirectTo: string
}
