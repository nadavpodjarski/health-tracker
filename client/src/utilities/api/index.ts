import axios from 'axios'

export const setAuthToken = (token: string) =>
   (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`)

export const removeAuthToken = () => {
   delete axios.defaults.headers.common['Authorization']
}
