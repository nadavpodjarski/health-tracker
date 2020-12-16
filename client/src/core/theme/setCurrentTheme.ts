import { lightTheme } from './light'
import { darkTheme } from './dark'

export const getTheme = (isDark: boolean) => {
   localStorage.setItem('MT_isDark', String(isDark))
   return !isDark ? { ...lightTheme } : { ...darkTheme }
}
