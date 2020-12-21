import React, { FC, useState } from 'react'
import { Box, Typography, Grid } from '@material-ui/core'

import { Symptom, SymptomDoc } from '../../../../../types/symptoms'
import * as symptomsUtils from '../../../../../utilities/symptoms'

import Duration from '../common/duration'
import Name from '../common/name'
import Description from '../common/description'
import DatePicker from '../common/date-picker'
import Scale from '../common/scale'
import ActionButtons from './action-buttons'

import * as _ from 'lodash'

import { useDispatch } from 'react-redux'
import * as symptomActions from '../../../../../redux/symptoms/actions'
import * as uiActions from '../../../../../redux/ui/actions'

const AddSymptomModalContent: FC<{
   symptomDoc: SymptomDoc
}> = ({ symptomDoc }) => {
   const [symptom, updateSymptom] = useState<Symptom>(symptomDoc.symptom)
   const [isUpdating, setIsUpdating] = useState(false)

   const [tempState] = useState(_.cloneDeep(symptom))

   const dispatch = useDispatch()

   const onChangeDuration = (duration: string | number) => {
      updateSymptom((prevState) => ({
         ...prevState,
         duration
      }))
   }

   const onChangeDescription = (description: string) => {
      updateSymptom((prevState) => ({
         ...prevState,
         description
      }))
   }

   const onChangeName = (name: string) => {
      updateSymptom((prevState) => ({
         ...prevState,
         name
      }))
   }

   const onAcceptTime = (date: Date) => {
      updateSymptom((prevState) => ({
         ...prevState,
         date
      }))
   }

   const onChangeScale = (scale: number) => {
      updateSymptom((prevState) => ({
         ...prevState,
         scale
      }))
   }

   const onConfirmEdit = async () => {
      if (_.isEqual(symptomDoc, tempState))
         return dispatch(uiActions.closeModal())
      setIsUpdating(true)
      try {
         await dispatch(symptomActions.editSymptom(symptom, symptomDoc.id))
      } catch (err) {
         console.log(err)
      } finally {
         setIsUpdating(false)
         dispatch(uiActions.closeModal())
      }
   }

   return (
      <Box display="flex" flexDirection="column">
         <Box padding="16px 0">
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>
               Edit Symptom
            </Typography>
         </Box>

         <Grid container spacing={3} style={{ marginTop: '32px' }}>
            <Grid item xs={12}>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                     <Name name={symptom.name} onChange={onChangeName} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Duration
                        duration={symptom.duration}
                        onChange={onChangeDuration}
                     />
                  </Grid>
               </Grid>
            </Grid>
            <Grid container item xs={12}>
               <Scale scale={symptom.scale} onChange={onChangeScale} />
            </Grid>
         </Grid>

         <Description
            description={symptom.description}
            onChange={onChangeDescription}
         />

         <DatePicker
            date={symptom.date}
            onAcceptTime={onAcceptTime}
            disabled={true}
         />

         <ActionButtons
            isUpdating={isUpdating}
            onCancel={() => dispatch(uiActions.closeModal())}
            isDisabled={!!symptomsUtils.isValidSymptom(symptom)}
            onConfirm={onConfirmEdit}
         />
      </Box>
   )
}

export default AddSymptomModalContent
