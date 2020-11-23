import axios from '../axiosClient'

type User = {
   email: string
   displayName: string
   picture: string
}

export const addUser = async (): Promise<User> => {
   try {
      const res = await axios.post('/api/user/add-user', {
         data: {}
      })
      return res.data
   } catch (err) {
      throw err
   }
}
