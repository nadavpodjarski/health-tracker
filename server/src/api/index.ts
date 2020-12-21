import { Router } from 'express'

import { userRouter } from '../packages/user/user.routes'
import { nutritionRouter } from '../packages/nutrition/nutrition.routes'
import { symptomRouter } from '../packages/symptom/symptom.routes'
import { homeRouter } from '../packages/home/home.routes'
import { firebaseAuth, timeZone } from '../middleware'

export const api = Router({ mergeParams: true })

api.use('/user', firebaseAuth, timeZone, userRouter)
api.use('/nutrition', firebaseAuth, timeZone, nutritionRouter)
api.use('/symptom', firebaseAuth, timeZone, symptomRouter)

api.use('/', homeRouter)
