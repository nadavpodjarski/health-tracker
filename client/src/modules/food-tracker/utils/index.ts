import { v4 as uuidv4 } from 'uuid';

const mealComponent = (uuid:any) => {
    return () => {
        return { id: uuid(), food: "", amount: "", metric: "gr" }

    }
}

export const makeNewMealComponent = mealComponent(uuidv4)