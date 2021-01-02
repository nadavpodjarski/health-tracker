import React, { FC } from 'react'
import { useDatePicker } from '../../../../common/hooks/useDatePicker'
import { makeStyles, Box } from '@material-ui/core'
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'
import { ParsedDateRange } from '../../../../types'

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
         justifyContent: 'center'
      }
   },
   dateRange: {
      background: theme.palette.background.paper,
      border: `2px solid ${theme.palette.divider}`
   }
}))

const FilterOptions: FC<{
   onDateRangeChange: (date: DateRange) => void
   dateRange: ParsedDateRange
}> = ({ onDateRangeChange, dateRange }) => {
   const classes = useStyles()
   const { DateRangePicker } = useDatePicker()

   return (
      <>
         <Box className={classes.root}>
            <DateRangePicker
               onAccept={onDateRangeChange}
               startAt={dateRange.startAt}
               endAt={dateRange.endAt}
               className={classes.dateRange}
            />
         </Box>
      </>
   )
}

export default FilterOptions
