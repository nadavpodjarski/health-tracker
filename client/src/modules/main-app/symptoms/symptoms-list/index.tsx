import React, { FC } from 'react'
import {
   List,
   ListSubheader,
   ListItem,
   makeStyles,
   Theme,
   Box,
   Typography
} from '@material-ui/core'

import Loader from '../../../../shared/components/loader'
import SymptomListItem from './list-item'

import { Symptom, SymptomDoc, Symptoms } from '../../../../types/symptoms'

import * as _ from 'lodash'

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      position: 'relative',
      overflowY: 'auto',
      flex: 1,
      minHeight: 0,
      scrollbarWidth: 'none',
      marginBottom: theme.spacing(1),
      maxWidth: '100%',
      '&::-webkit-scrollbar': {
         display: 'none'
      }
   },
   listSection: {
      backgroundColor: 'inherit',
      fontSize: '22px'
   },
   ul: {
      backgroundColor: 'inherit',
      padding: 0
   },
   subHeaderWrapper: {
      display: 'flex',
      justifyContent: 'center',
      padding: '5px 0'
   },
   subHeader: {
      background: theme.palette.background.paper,
      borderRadius: '50px',
      boxShadow: theme.shadows[3],
      padding: '0 10px',
      border: `2px solid ${theme.palette.primary.main}`,
      [theme.breakpoints.down('sm')]: {
         transform: 'scale(0.85)'
      },
      lineHeight: '32px',
      fontSize: '14px'
   }
}))

const SymptomsList: FC<{
   isLoading: boolean
   symptoms: Symptoms
   onCopySymptom: (symptom: Symptom) => Promise<any>
   onDeleteSymptom: (docId: string) => Promise<any>
   onEditSymptom: (symptom: SymptomDoc) => Promise<any>
}> = ({
   isLoading,
   symptoms,
   onDeleteSymptom,
   onEditSymptom,
   onCopySymptom
}) => {
   const classes = useStyles()

   const setDeleteSymptom = (docId: string) => {
      onDeleteSymptom(docId)
   }

   const setEditSymptom = (symptomDoc: SymptomDoc) => {
      onEditSymptom(_.cloneDeep(symptomDoc))
   }

   const setCopySymptom = (meal: Symptom) => {
      const newSymptom = _.cloneDeep(meal)
      newSymptom.date = new Date()
      onCopySymptom(newSymptom)
   }

   return (
      <List
         component={Box}
         className={classes.root}
         subheader={<li />}
         disablePadding
      >
         {!isLoading ? (
            symptoms.length ? (
               <>
                  {symptoms?.map((symptomsByDate, i) => {
                     return (
                        <li
                           key={`section-${i}`}
                           className={classes.listSection}
                        >
                           <ul className={classes.ul}>
                              <ListSubheader
                                 className={classes.subHeaderWrapper}
                              >
                                 <Box className={classes.subHeader}>
                                    {symptomsByDate._id}
                                 </Box>
                              </ListSubheader>
                              {symptomsByDate.symptoms.map(
                                 (item, i: number) => {
                                    return (
                                       <SymptomListItem
                                          key={`symptom-list-item_${i}`}
                                          item={item}
                                          setCopySymptom={setCopySymptom}
                                          setDeleteSymptom={setDeleteSymptom}
                                          setEditSymptom={setEditSymptom}
                                       />
                                    )
                                 }
                              )}
                           </ul>
                        </li>
                     )
                  })}
               </>
            ) : (
               <Box
                  height="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
               >
                  <Typography variant="h5">No Symptoms</Typography>
                  <Typography
                     style={{ fontSize: '16px' }}
                     color="textSecondary"
                  >
                     (Add New Symptom To Your List)
                  </Typography>
               </Box>
            )
         ) : (
            <ListItem
               style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
            >
               <Loader title="Fetching Symptoms" withShadow />
            </ListItem>
         )}
      </List>
   )
}

export default SymptomsList
