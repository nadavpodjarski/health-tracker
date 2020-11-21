import { Router } from 'express'
import * as UserController from './user.controller'

export const userRouter = Router()

userRouter.post('/add-user', UserController.addUser)
