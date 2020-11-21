import React, { FC } from 'react'
import {
   FormControl,
   RadioGroup,
   Radio,
   FormControlLabel
} from '@material-ui/core'
import * as symptomUtils from '../../../../../../../utilities/symptoms'

const Scale: FC<{ onChange: (value: number) => void; scale: number }> = ({
   onChange,
   scale
}) => {
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      onChange(Number(value))
   }

   return (
      <FormControl component="fieldset">
         {/* <FormLabel component="legend">Intensity</FormLabel> */}
         <RadioGroup row value={scale} onChange={handleChange}>
            {symptomUtils.symptomScale.map((s) => {
               return (
                  <FormControlLabel
                     value={s.value}
                     control={<Radio color="primary" />}
                     label={s.const}
                     labelPlacement="bottom"
                  />
               )
            })}
         </RadioGroup>
      </FormControl>
   )
}

export default Scale
