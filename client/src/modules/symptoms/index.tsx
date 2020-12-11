import React, { useEffect } from 'react'

import { useModal } from '../../common/hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'

import * as symptomsActions from '../../redux/trackers/symptoms/actions'
import * as UIActions from '../../redux/ui/actions'
import * as symptomsUtils from '../../utilities/symptoms'

import { Symptom } from '../../types/symptoms'

import {
   Box,
   makeStyles,
   createStyles,
   Theme,
   Button,
   Typography
} from '@material-ui/core'

import SymptomsList from './symptoms-list'
import AddSymptomModalContent from './modals/add-symptom-modal'
import FilterOptions from './filter-options'

import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      moduleRoot: {
         display: 'flex',
         flex: 1,
         minHeight: 0,
         justifyContent: 'center',
         width: '100%'
      },
      innerModule: {
         width: '100%',
         maxWidth: '1200px',
         height: '100%',
         display: 'flex',
         flexDirection: 'column',
         position: 'relative'
      },
      openModalButtonWrapper: {
         display: 'flex',
         alignItems: 'center',
         width: '100%',
         padding: '24px 0',
         [theme.breakpoints.down('sm')]: {
            padding: '12px 0'
         }
      },
      openModalButton: {
         fontSize: '20px',
         background: theme.palette.primary.main,
         color: theme.palette.common.white,
         '&:hover': {
            background: theme.palette.primary.main
         },
         [theme.breakpoints.down('sm')]: {
            fontSize: '16px'
         },
         boxShadow: theme.shadows[4]
      },
      header: {
         minHeight: 200,
         textAlign: 'left',
         width: '100%',
         padding: '16px 0',
         [theme.breakpoints.down('md')]: {
            padding: '16px 12px'
         }
      }
   })
)

const Symptoms = () => {
   const classes = useStyles()
   const dispatch = useDispatch()

   const { symptoms, dateRange, isLoading } = useSelector(
      (state) => state.symptoms
   )

   useEffect(() => {
      dispatch(symptomsActions.fetchSymptoms(dateRange))
      //eslint-disable-next-line
   }, [dateRange])

   useEffect(() => {
      dispatch(UIActions.setModuleTtiel('Symptoms'))
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
               <Box>
                  <Typography component="p" style={{ padding: '12px 0' }}>
                     This is your <strong>Symptoms Tracker</strong>, Here you
                     can Add, Edit and Delete Symptoms...
                  </Typography>
               </Box>
               <Box className={classes.openModalButtonWrapper}>
                  <Button
                     className={classes.openModalButton}
                     onClick={addSymptomModalToggler}
                  >
                     Add Symptom
                  </Button>
               </Box>
            </Box>
            <FilterOptions {...{ onDateRangeChange, dateRange }} />
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
