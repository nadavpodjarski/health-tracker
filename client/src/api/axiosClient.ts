import axios from 'axios'
import { useFirebaseAuth } from '../core/firebase/useFirebaseAuth'

const { firebaseAuth } = useFirebaseAuth()

axios.interceptors.request.use(
   async function (config) {
      const userToekn = await firebaseAuth().currentUser?.getIdToken()
      config.headers['authorization'] = `Bearer ${userToekn}`
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      config.headers['timezone'] = tz
      return config
   },
   function (error) {
      return Promise.reject(error)
   }
)

export default axios
