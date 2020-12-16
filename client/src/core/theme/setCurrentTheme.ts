import { lightTheme } from './light'
import { darkTheme } from './dark'

export const getTheme = (isDark: boolean) => {
   localStorage.setItem('MT_isDark', JSON.stringify(isDark))
   return !isDark ? { ...lightTheme } : { ...darkTheme }
}
