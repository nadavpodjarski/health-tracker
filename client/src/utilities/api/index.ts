import axios from 'axios'

export const removeAuthToken = () => {
   delete axios.defaults.headers.common['Authorization']
}
