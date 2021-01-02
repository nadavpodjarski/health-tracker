import React, { FC } from 'react'
import { Select, MenuItem } from '@material-ui/core'
import { MealTypes } from '../../../../../../types/nutrition'
import * as nutritionUtils from '../../../../../../utilities/nutrition'

const SelectMealType: FC<{
   type: MealTypes
   onChange: (value: MealTypes) => void
}> = ({ onChange, type }) => {
   const onChangeHandler = (
      event: React.ChangeEvent<{
         name?: string | undefined
         value: unknown
      }>
   ) => {
      const { value } = event.target
      onChange(value as MealTypes)
   }

   return (
      <Select variant="outlined" value={type} onChange={onChangeHandler}>
         {nutritionUtils.mealTypes.map((item) => {
            return <MenuItem value={item.value}>{item.const}</MenuItem>
         })}
      </Select>
   )
}

export default SelectMealType
