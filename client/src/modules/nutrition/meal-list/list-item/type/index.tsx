import React, { FC } from 'react'
import { Typography, colors } from '@material-ui/core'
import { MealTypes } from '../../../../../types/nutrition'

const Type: FC<{ type: MealTypes }> = ({ type }) => {
   return (
      <Typography
         component="span"
         style={{
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            padding: '0',
            margin: '0',
            fontSize: 20
         }}
      >
         {MealTypes[type]}
      </Typography>
   )
}

export default Type
