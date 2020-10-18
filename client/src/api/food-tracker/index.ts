import { useDatabase } from '../../main/firebase/useDatabase'
import * as utils from '../utils'

const foodCollection = utils.collections.food

const { db } = useDatabase();

export const getMeals = async (currentUser:any) => {
   try{
   return  db.collection(foodCollection).where("author.uid", "==", currentUser.uid)
   }
    catch(err){
        throw err
  }
}

export const postMeal = async (meal:any, currentUser:any) => {    
    try{
    const author = utils.makeAuthor(currentUser);
    const doc = { author, meal, createdAt:Date.now() };
    return db.collection(foodCollection).add(doc)
    }
    catch(err){
        throw err
    }
}

export const deleteMeal = async (mealId:string, currentUser:any) => {
    return db.collection(foodCollection).doc(mealId).delete()
}

export const putMeal =async (meal:any, currentUser:any) => {
    return ""
}