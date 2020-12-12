import React, { useEffect } from 'react'

import { useModal } from '../../common/hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'

import * as symptomsActions from '../../redux/trackers/symptoms/actions'
import * as symptomsUtils from '../../utilities/symptoms'

import { Symptom } from '../../types/symptoms'

import { Box, Grid } from '@material-ui/core'

import { useLayoutStyles } from './styles/layout'

import SymptomsList from './symptoms-list'
import AddSymptomModalContent from './modals/add-symptom-modal'
import FilterOptions from './filter-options'
import Intro from './intro'
import AddSymptomButton from './add-symptom-button'

import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'

const Symptoms = () => {
   const classes = useLayoutStyles()
   const dispatch = useDispatch()

   const { symptoms, dateRange, isLoading } = useSelector(
      (state) => state.symptoms
   )

   useEffect(() => {
      dispatch(symptomsActions.fetchSymptoms(dateRange))
      //eslint-disable-next-line
   }, [dateRange])

   useEffect(() => {
      return () => {
         dispatch(symptomsActions.cleanSymptomsState())
      }
      //eslint-disable-next-line
   }, [])

   const [addSymptomModalToggler, AddSymptomModal] = useModal()

   const onDateRangeChange = (date: DateRange) => {
      date[0] = date[0] || new Date()
      date[1] = date[1] || new Date()
      dispatch(symptomsActions.setSymptomsDateRange(date))
   }

   const onAddSymptom = async (symptom: Symptom) => {
      return dispatch(symptomsActions.addSymptom(symptom))
   }

   const onCopySymptom = async (symptom: Symptom) => {
      return dispatch(symptomsActions.addSymptom(symptom))
   }

   const onEditSymptom = async (symptom: Symptom, docId: string) => {
      return dispatch(symptomsActions.editSymptom(symptom, docId))
   }

   const onDeleteSymptom = async (docId: string) => {
      return dispatch(symptomsActions.deleteSymptom(docId))
   }

   return (
      <div className={classes.moduleRoot}>
         <Box className={classes.innerModule}>
            <Box className={classes.header}>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                     <Intro />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <AddSymptomButton
                        className={classes.openModalButton}
                        onClick={addSymptomModalToggler}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <FilterOptions
                        onDateRangeChange={onDateRangeChange}
                        dateRange={dateRange}
                     />
                  </Grid>
               </Grid>
            </Box>
            <SymptomsList
               isLoading={isLoading}
               symptoms={symptoms}
               onCopySymptom={onCopySymptom}
               onDeleteSymptom={onDeleteSymptom}
               onEditSymptom={onEditSymptom}
            />
         </Box>
         <AddSymptomModal width={1200}>
            <AddSymptomModalContent
               symptom={symptomsUtils.makeNewSymptom()}
               modalToggler={addSymptomModalToggler}
               onAddSymptom={onAddSymptom}
            />
         </AddSymptomModal>
      </div>
   )
}

export default Symptoms
