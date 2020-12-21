import { Router } from 'express'
import * as HomeController from './home.controller'

export const homeRouter = Router()

homeRouter.post('/send-contact-form', HomeController.postContactForm)
