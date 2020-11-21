import { Router } from 'express'

import { userRouter } from '../packages/user/user.routes'
import { nutritionRouter } from '../packages/nutrition/nutrition.routes'
import { symptomRouter } from '../packages/symptom/symptom.routes'

export const api = Router()

api.use('/user', userRouter)
api.use('/nutrition', nutritionRouter)
api.use('/symptom', symptomRouter)
