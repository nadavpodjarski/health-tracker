import axios from '../axiosClient'

export const postContactForm = async (data: any) => {
   try {
      const res = await axios.post('/api/send-contact-form', { data })
      return res.data
   } catch (err) {
      throw new Error(err.response?.data)
   }
}
