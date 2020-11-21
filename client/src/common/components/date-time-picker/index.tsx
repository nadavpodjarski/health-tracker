import React, { useState, FC } from 'react'
import {
   LocalizationProvider,
   MobileDateTimePicker
} from '@material-ui/pickers'
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns'
import { makeStyles, Theme, TextField } from '@material-ui/core'
import 'date-fns'

const useStyles = makeStyles((theme: Theme) => ({
   dateRoot: {
      width: '350px'
   }
}))

const BasicDateTimePicker: FC<{
   onAcceptMealTime: (date: Date | null) => void
   label?: string
   date?: Date | null
}> = ({ onAcceptMealTime, label, date }) => {
   const classes = useStyles()
   const [selectedDate, setSelectedDate] = useState<Date | null>(
      date || new Date()
   )

   const handleDateChange = (date: Date | null) => {
      onAcceptMealTime(date)
      setSelectedDate(date)
   }

   return (
      <LocalizationProvider dateAdapter={DateFnsUtils}>
         <MobileDateTimePicker
            disableFuture
            value={selectedDate}
            onChange={() => {}}
            onAccept={handleDateChange}
            label={label}
            ampm={false}
            inputFormat="dd/MM/yyyy - HH:mm"
            DialogProps={{
               PaperProps: { classes: { root: classes.dateRoot } }
            }}
            renderInput={(props) => <TextField {...props} variant="outlined" />}
         />
      </LocalizationProvider>
   )
}

export default BasicDateTimePicker
