import axios from 'axios'
import { useFirebaseAuth } from '../main/firebase/useFirebaseAuth'
import moment from 'moment-timezone'

const { firebaseAuth } = useFirebaseAuth()

axios.interceptors.request.use(
   async function (config) {
      const userToekn = await firebaseAuth().currentUser?.getIdToken()
      config.headers['authorization'] = `Bearer ${userToekn}`
      config.headers['timezone'] = moment.tz.guess()

      return config
   },
   function (error) {
      return Promise.reject(error)
   }
)

export default axios
