import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import * as symptomsActions from '../../../redux/symptoms/actions'

import { Symptom, SymptomDoc } from '../../../types/symptoms'

import { Box, Grid } from '@material-ui/core'

import { useLayoutStyles } from './styles/layout'

import SymptomsList from './symptoms-list'
import FilterOptions from './filter-options'
import Intro from './intro'
import AddSymptomButton from './add-symptom-button'

import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'

import * as uiActions from '../../../redux/ui/actions'

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

   const onDateRangeChange = (date: DateRange) => {
      date[0] = date[0] || new Date()
      date[1] = date[1] || new Date()
      dispatch(symptomsActions.setSymptomsDateRange(date))
   }

   const onAddSymptomHandler = async () => {
      dispatch(uiActions.setModal('add-symptom', { width: 1200 }))
   }

   const onCopySymptomHandler = async (symptom: Symptom) => {
      dispatch(
         uiActions.setModal('add-symptom', { props: { symptom }, width: 1200 })
      )
   }

   const onEditSymptomHandler = async (symptomDoc: SymptomDoc) => {
      return dispatch(
         uiActions.setModal('edit-symptom', {
            props: { symptomDoc },
            width: 1200
         })
      )
   }

   const onDeleteSymptomHandler = async (docId: string) => {
      dispatch(
         uiActions.setModal('delete-symptom', {
            props: {
               docId
            },
            width: 500
         })
      )
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
                        className={classes.addSymptomlButton}
                        onClick={onAddSymptomHandler}
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
               onCopySymptom={onCopySymptomHandler}
               onDeleteSymptom={onDeleteSymptomHandler}
               onEditSymptom={onEditSymptomHandler}
            />
         </Box>
      </div>
   )
}

export default Symptoms
