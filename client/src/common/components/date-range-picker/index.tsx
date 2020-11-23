import React, { FC, useState, useEffect } from 'react'
import {
   TextField,
   Divider,
   Box,
   useTheme,
   makeStyles
} from '@material-ui/core'
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns'
import DateRangeIcon from '@material-ui/icons/DateRange'
import {
   MobileDateRangePicker,
   LocalizationProvider
} from '@material-ui/pickers'
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
   textFiled: {
      fontSize: '16px',
      cursor: 'pointer',
      maxWidth: '100px',
      textAlign: 'center'
   }
}))

const parseTimes = (startAt: Date, endAt: Date) => {
   const parsedStart = moment(startAt).valueOf()
   const parsedEnd = moment(endAt).valueOf()
   return [parsedStart, parsedEnd]
}

const DateRangePicker: FC<{
   onChange: (date: DateRange) => void
   startAt: Date | null
   endAt: Date | null
}> = ({ onChange, startAt, endAt }) => {
   const [value, setValue] = useState<any>(
      parseTimes(startAt as Date, endAt as Date)
   )

   const theme = useTheme()
   const classes = useStyles()

   useEffect(() => {
      if (startAt && endAt) {
         setValue(parseTimes(startAt, endAt))
      }
   }, [startAt, endAt])

   const onAcceptHandler = (date: DateRange) => {
      if (date) {
         onChange(date)
         setValue(date)
      }
   }

   const onChangeHandler = (
      date: DateRange<Date>,
      keyboardInputValue?: string | undefined
   ) => {}

   return (
      <LocalizationProvider dateAdapter={DateFnsUtils}>
         <MobileDateRangePicker
            disableFuture
            value={value}
            onAccept={(date: any) => onAcceptHandler(date)}
            inputFormat="dd/MM/yyyy"
            onChange={onChangeHandler}
            allowSameDateSelection={true}
            renderInput={(startProps, endProps) => (
               <div
                  style={{
                     padding: '6px 6px 6px 12px',
                     display: 'flex',
                     alignItems: 'center',
                     border: `1px solid ${theme.palette.divider}`,
                     borderRadius: '50px'
                  }}
               >
                  <Box padding="0 6px">
                     <DateRangeIcon fontSize="small" />
                  </Box>
                  <TextField
                     {...startProps}
                     label=""
                     variant="standard"
                     helperText=""
                     inputProps={{
                        ...startProps.inputProps,
                        className: classes.textFiled
                     }}
                     InputProps={{
                        disableUnderline: true
                     }}
                  />
                  <Divider
                     orientation="vertical"
                     style={{
                        height: 'auto',
                        margin: '0 16px',
                        alignSelf: 'stretch'
                     }}
                  />
                  <TextField
                     {...endProps}
                     label=""
                     helperText=""
                     variant="standard"
                     inputProps={{
                        ...endProps.inputProps,
                        className: classes.textFiled
                     }}
                     InputProps={{
                        disableUnderline: true
                     }}
                  />
               </div>
            )}
         />
      </LocalizationProvider>
   )
}

export default DateRangePicker
