import axios from 'axios'
import { useFirebaseAuth } from '../main/firebase/useFirebaseAuth'

const { firebaseAuth } = useFirebaseAuth()

axios.interceptors.request.use(
   async function (config) {
      const userToekn = await firebaseAuth().currentUser?.getIdToken()
      config.headers['authorization'] = `Bearer ${userToekn}`
      return config
   },
   function (error) {
      // Do something with request error
      return Promise.reject(error)
   }
)

export default axios
