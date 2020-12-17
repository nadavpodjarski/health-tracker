import { Router } from 'express'
import * as HomeController from './home.controller'

export const homeAPI = Router()

homeAPI.post('/send-contact-form', HomeController.postContactForm)
