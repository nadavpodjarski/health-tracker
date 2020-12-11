import { IStore } from './types/redux'

declare module 'react-redux' {
   interface DefaultRootState extends IStore {}
}
