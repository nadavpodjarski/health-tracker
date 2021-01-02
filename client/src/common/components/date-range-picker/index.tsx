import React, { FC, useState, useEffect, useRef } from 'react'
import { TextField, Divider, Box, makeStyles } from '@material-ui/core'

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
      fontSize: '14px',
      cursor: 'pointer',
      maxWidth: '80px',
      textAlign: 'center'
   }
}))

const DateRangePicker: FC<{
   onAccept: (date: DateRange) => void
   startAt: Date
   endAt: Date
   className?: string
}> = ({ onAccept, startAt, endAt, className }) => {
   const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null])

   const classes = useStyles()

   useEffect(() => {
      setDateRange([startAt, endAt])
   }, [startAt, endAt])

   const onAcceptHandler = (date: any) => {
      if (date) {
         onAccept(date)
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
            value={dateRange}
            onAccept={(date: any) => onAcceptHandler(date)}
            inputFormat="dd/MM/yyyy"
            onChange={onChangeHandler}
            allowSameDateSelection={true}
            renderInput={(startProps, endProps) => (
               <>
                  <div
                     style={{
                        padding: '6px 6px 6px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '25px'
                     }}
                     className={className}
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
                           className: classes.textFiled,
                           value: moment(dateRange[0]).format('DD/MM/YYYY')
                        }}
                        InputProps={{
                           disableUnderline: true
                        }}
                     />
                     <Divider
                        orientation="vertical"
                        style={{
                           height: 'auto',
                           margin: '0 8px',
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
                           className: classes.textFiled,
                           value: moment(dateRange[1]).format('DD/MM/YYYY')
                        }}
                        InputProps={{
                           disableUnderline: true
                        }}
                     />
                  </div>
               </>
            )}
         />
      </LocalizationProvider>
   )
}

export default DateRangePicker
