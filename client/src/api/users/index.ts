import axios from '../axiosClient'

type User = {
   email: string
   displayName: string
   picture: string
}

export const getProfile = async (): Promise<User> => {
   try {
      const res = await axios.get('/api/user/get-profile', {
         data: {}
      })
      return res.data
   } catch (err) {
      throw err
   }
}
