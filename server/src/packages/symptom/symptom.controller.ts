import { Request, Response } from 'express'
import { Symptom } from './symptom.model'
import mongoose from 'mongoose'

import * as helpers from '../../helpers'
import * as _ from 'lodash'

export const addSymptom = async (req: Request, res: Response) => {
   const { data: symptom } = req.body

   if (_.isEmpty(symptom)) res.status(400).json('Unble to Proccess Request')

   symptom.date = helpers.stringToDate(symptom.date)

   try {
      const newSymptom = new Symptom({
         author: {
            uid: req.user?.uid,
            displayName: req.user?.displayName
         },
         symptom
      })
      await newSymptom.save()
      res.json({ message: 'Symptom Added Successfully' })
   } catch (err) {
      console.log(err.stack)
      res.status(500).json('There was an error while adding symptom')
   }
}

export const getSymptoms = async (req: Request, res: Response) => {
   const { startAt, endAt } = req.query
   const { timezone } = req.user
   if (!startAt || !endAt)
      return res.status(400).json('Unable To Proccess Request')

   try {
      const start = helpers.getStartDayDate(startAt as string, timezone)
      const end = helpers.getEndDayDate(endAt as string, timezone)

      const symptoms = await Symptom.aggregate([
         {
            $match: {
               $and: [
                  {
                     'symptom.date': { $gte: start, $lte: end }
                  },
                  { 'author.uid': req.user?.uid }
               ]
            }
         },
         { $sort: { 'symptom.date': 1 } },
         {
            $group: {
               _id: {
                  $dateToString: {
                     format: '%d/%m/%Y',
                     date: '$symptom.date',
                     timezone: req.user.timezone
                  }
               },
               symptoms: { $push: { symptom: '$symptom', id: '$_id' } }
            }
         },
         { $sort: { 'symptoms.symptom.date': -1 } }
      ])

      return res.json(symptoms)
   } catch (err) {
      console.log(err.stack)
      return res.status(500).json('There was an Error while fetching symptoms')
   }
}

export const deleteSymptom = async (req: Request, res: Response) => {
   const { docId: _id } = req.query

   if (!mongoose.isValidObjectId(_id))
      return res.status(400).json('Unable To Proccess Request')

   try {
      const doc = await Symptom.findOne({ _id })

      if (!doc?.verifyOwnership(req.user.uid))
         return res.status(403).json('Unauthorized request')

      const deletedDoc = await doc.deleteOne()

      return res.json({
         message: 'Symptom Deleted Successfully',
         docId: deletedDoc._id
      })
   } catch (err) {
      console.log(err.stack)
      return res.status(500).json('There was an Error while deleting symptom')
   }
}

export const editSymptom = async (req: Request, res: Response) => {
   const {
      data: { symptom, docId: _id }
   } = req.body

   if (!mongoose.isValidObjectId(_id) || _.isEmpty(symptom))
      res.status(400).json('Unable To Proccess Request')

   symptom.date = helpers.stringToDate(symptom?.date)

   try {
      const doc = await Symptom.findOne({ _id })

      if (!doc?.verifyOwnership(req.user.uid))
         return res.status(403).json('Unauthorized request')

      await doc?.updateOne({ $set: { symptom } })

      return res.json({
         message: 'Symptom Updated Successfully',
         docId: _id,
         symptom
      })
   } catch (err) {
      console.log(err.stack)
      return res.status(500).json('There was an Error while updating symptom')
   }
}
