import { Router } from 'express'
import * as SymptomController from './symptom.controller'

export const symptomRouter = Router()

symptomRouter.get('/get-symptoms', SymptomController.getSymptoms)
symptomRouter.post('/add-symptom', SymptomController.addSymptom)
symptomRouter.put('/edit-symptom', SymptomController.editSymptom)
symptomRouter.delete('/delete-symptom', SymptomController.deleteSymptom)
