import React, {  useState, FC } from "react";
import { DateTimePicker , MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {makeStyles, Theme} from '@material-ui/core'
import 'date-fns';


const useStyles = makeStyles((theme:Theme) => ({
    dateRoot:{
        width:"350px",
    }
}))


const  BasicDateTimePicker:FC<{ onChange: (date: Date | null) => void, label?: string }> = ({onChange, label}) => {
    const classes = useStyles()
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        new Date(),
    );

    const handleDateChange = (date: Date | null) => {
        onChange(date)
        setSelectedDate(date);
    };
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        showTodayButton
        disableFuture
        ampm={false}
        label={label}
        DialogProps={{PaperProps:{classes:{root:classes.dateRoot }}}}
        inputVariant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;