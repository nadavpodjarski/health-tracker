import React, { FC } from 'react'
import { Direction } from '../../../../main/types'
import { useDatePicker } from '../../../../common/hooks/useDatePicker'
import { Paper } from '@material-ui/core'

const FilterOptions: FC<{ onStartDateChange: (date: Date | null) => void, onEndDateChange: (date: Date | null) => void } & Direction> = ({ direction, onEndDateChange, onStartDateChange }) => {
    const { DatePicker } = useDatePicker();


    return (
        <Paper style={{ display: "flex", direction: direction, margin: "16px 0", padding: "0 8px", alignItems: "center" }} elevation={1} >
            <div>
                <DatePicker onChange={onStartDateChange} label="From" />
            </div>
            <div style={{ padding: "0 24px" }}>
                <DatePicker onChange={onEndDateChange} label="To" />
            </div>
        </Paper >
    )
}

export default FilterOptions