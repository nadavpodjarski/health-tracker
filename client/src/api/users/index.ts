import axios from '../axiosClient'

export const addUser = async () => {
   try {
      const res = await axios.post('/api/user/add-user', {
         data: ''
      })
      return res.data
   } catch (err) {
      throw err
   }
}
