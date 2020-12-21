import React, { FC, useState } from 'react'
import { Box, Typography, Grid } from '@material-ui/core'

import { Symptom } from '../../../../../types/symptoms'
import * as symptomsUtils from '../../../../../utilities/symptoms'

import Duration from '../common/duration'
import Name from '../common/name'
import Description from '../common/description'
import DatePicker from '../common/date-picker'
import Scale from '../common/scale'
import ActionButtons from './action-buttons'

import { useDispatch } from 'react-redux'
import * as uiActions from '../../../../../redux/ui/actions'
import * as symptomActions from '../../../../../redux/symptoms/actions'

const AddSymptomModalContent: FC<{ symptom?: Symptom }> = ({ symptom }) => {
   const [state, setState] = useState(symptom || symptomsUtils.makeNewSymptom())
   const [isSaving, setIsSaving] = useState(false)

   const dispatch = useDispatch()

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
      try {
         setIsSaving(true)
         await dispatch(symptomActions.addSymptom(state))
         setIsSaving(false)
      } catch (err) {
         console.log(err)
      } finally {
         dispatch(uiActions.closeModal())
      }
   }

   return (
      <Box display="flex" flexDirection="column">
         <Box padding="16px 0">
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>
               Add Symptom
            </Typography>
         </Box>

         <Grid container spacing={3} style={{ marginTop: '32px' }}>
            <Grid item xs={12}>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={9}>
                     <Name name={state.name} onChange={onChangeName} />
                  </Grid>
                  <Grid item xs={12} sm={3}>
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

         <DatePicker date={state.date} onAcceptTime={onAcceptTime} />

         <ActionButtons
            isSaving={isSaving}
            onCancel={() => dispatch(uiActions.closeModal())}
            isDisabled={!!symptomsUtils.isValidSymptom(state)}
            onConfirm={onAdd}
         />
      </Box>
   )
}

export default AddSymptomModalContent
