import React, { FC, useState } from 'react'
import { Box, Typography, Grid } from '@material-ui/core'

import { Symptom } from '../../../../types/symptoms'
import * as symptomsUtils from '../../../../utilities/symptoms'

import Duration from '../common/components/duration'
import Name from '../common/components/name'
import Description from '../common/components/description'
import DatePicker from '../common/components/date-picker'
import Scale from '../common/components/scale'
import ActionButtons from './action-buttons'

import * as _ from 'lodash'

const AddSymptomModalContent: FC<{
   onCancelEdit: () => void
   onConfirmEdit: (symptom: Symptom) => Promise<any>
   symptomToBeUpdated: Symptom
   toggler: () => void
}> = ({ onCancelEdit, onConfirmEdit, symptomToBeUpdated, toggler }) => {
   const [state, setState] = useState(symptomToBeUpdated)
   const [isUpdating, setIsUpdating] = useState(false)

   const [tempState] = useState(_.cloneDeep(symptomToBeUpdated))

   const onChangeDuration = (duration: string | number) => {
      setState((prevState) => ({
         ...prevState,
         duration
      }))
   }

   const onChangeDescription = (description: string) => {
      setState((prevState) => ({
         ...prevState,
         description
      }))
   }

   const onChangeName = (name: string) => {
      setState((prevState) => ({
         ...prevState,
         name
      }))
   }

   const onAcceptTime = (date: Date) => {
      setState((prevState) => ({
         ...prevState,
         date
      }))
   }

   const onChangeScale = (scale: number) => {
      setState((prevState) => ({
         ...prevState,
         scale
      }))
   }

   const onAdd = async () => {
      if (_.isEqual(state, tempState)) return toggler()
      setIsUpdating(true)
      try {
         await onConfirmEdit(state)
      } catch (err) {
         console.log(err)
         setIsUpdating(false)
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
                     <Name name={state.name} onChange={onChangeName} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Duration
                        duration={state.duration}
                        onChange={onChangeDuration}
                     />
                  </Grid>
               </Grid>
            </Grid>
            <Grid container item xs={12}>
               <Scale scale={state.scale} onChange={onChangeScale} />
            </Grid>
         </Grid>

         <Description
            description={state.description}
            onChange={onChangeDescription}
         />

         <DatePicker
            date={state.date}
            onAcceptTime={onAcceptTime}
            disabled={true}
         />

         <ActionButtons
            isUpdating={isUpdating}
            onCancel={onCancelEdit}
            isDisabled={!!symptomsUtils.isValidSymptom(state)}
            onConfirm={onAdd}
         />
      </Box>
   )
}

export default AddSymptomModalContent
