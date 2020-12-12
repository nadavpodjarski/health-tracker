import React, { FC } from 'react'
import { useDatePicker } from '../../../../../common/hooks/useDatePicker'
import { Typography, Grid } from '@material-ui/core'

const DatePicker: FC<{
   onAcceptTime: (date: Date) => void
   date: Date
   disabled?: boolean
}> = ({ onAcceptTime, date, disabled }) => {
   const { DateTimePicker } = useDatePicker()

   const onAcceptTimeHandler = (date: Date | null) => {
      if (date) {
         onAcceptTime(date)
      }
   }
   return (
      <>
         <Grid container style={{ paddingBottom: '40px' }}>
            <Grid item>
               <Typography variant="h6" style={{ padding: '12px 0' }}>
                  Set Date & Time
               </Typography>
               <DateTimePicker
                  onAcceptMealTime={onAcceptTimeHandler}
                  date={date}
                  disabled={disabled}
               />
            </Grid>
         </Grid>
      </>
   )
}

export default DatePicker
