import React, { FC } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useDatePicker } from '../../../../../../common/hooks/useDatePicker'
import { useModalStyles } from '../../../styles/modal'

const MealDatePicker: FC<{
   onAcceptTime: (date: Date) => void
   date: Date
   disabled?: boolean
}> = ({ onAcceptTime, date, disabled }) => {
   const { DateTimePicker } = useDatePicker()

   const classes = useModalStyles()

   const onAccept = (date: Date | null) => {
      if (date) {
         onAcceptTime(date)
      }
   }
   return (
      <Grid
         container
         direction="column"
         justify="center"
         className={classes.datePicker}
      >
         <Grid item>
            <Typography variant="h6" className={classes.dateTitle}>
               Set Date & Time
            </Typography>
         </Grid>
         <Grid item>
            <DateTimePicker
               onAcceptMealTime={onAccept}
               date={date}
               disabled={disabled}
            />
         </Grid>
      </Grid>
   )
}

export default MealDatePicker
