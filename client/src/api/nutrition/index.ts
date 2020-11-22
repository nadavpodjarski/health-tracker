import axios from '../axiosClient'
import { Meal } from '../../types/nutrition'

export const getMeals = async (startAt: Date, endAt: Date) => {
   try {
      const res = await axios.get('/api/nutrition/get-meals', {
         params: {
            startAt,
            endAt
         }
      })
      return res.data
   } catch (err) {
      throw new Error(err.response?.data)
   }
}

export const postMeal = async (meal: Meal) => {
   try {
      const res = await axios.post('/api/nutrition/add-meal', { data: meal })
      return res.data
   } catch (err) {
      throw new Error(err.response?.data)
   }
}

export const deleteMeal = async (docId: string) => {
   try {
      const res = await axios.delete('/api/nutrition/delete-meal', {
         params: { docId }
      })
      return res.data
   } catch (err) {
      throw new Error(err.response?.data)
   }
}

export const putMeal = async (meal: Meal, docId: string) => {
   try {
      const res = await axios.put('/api/nutrition/edit-meal', {
         data: { meal, docId }
      })
      return res.data
   } catch (err) {
      throw new Error(err.response?.data)
   }
}
