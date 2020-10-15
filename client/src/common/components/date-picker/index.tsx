import 'date-fns';
import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    DatePicker,
} from '@material-ui/pickers';

const BasicDatePicker: FC<{ onChange: (date: Date | null) => void, label?: string }> = ({ onChange, label }) => {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
    );

    const handleDateChange = (date: Date | null) => {
        onChange(date)
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                showTodayButton
                style={{ maxWidth: "100px" }}
                margin="normal"
                disableFuture
                id="date-picker-dialog"
                label={label || "Date picker dialog"}
                format="MM/dd/yyyy"
                value={selectedDate}
                size="small"
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    );
}

export default BasicDatePicker
