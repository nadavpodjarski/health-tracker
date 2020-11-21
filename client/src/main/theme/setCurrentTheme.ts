import { lightTheme } from './light'
import { darkTheme } from './dark'

export const getTheme = (isDark: boolean) => {
   localStorage.setItem('isDark', String(isDark))
   return !isDark ? { ...lightTheme } : { ...darkTheme }
}
