import React, { FC } from 'react'
import {
   FormControl,
   RadioGroup,
   Radio,
   FormLabel,
   Typography,
   Box
} from '@material-ui/core'
import * as symptomUtils from '../../../../../../utilities/symptoms'

const Scale: FC<{ onChange: (value: number) => void; scale: number }> = ({
   onChange,
   scale
}) => {
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      onChange(Number(value))
   }

   return (
      <>
         <FormControl component="fieldset">
            <FormLabel>
               <Box display="inline-block" padding="8px 0">
                  <Typography component="span" color="textSecondary">
                     {`Intensity - `}
                  </Typography>
                  <Typography color="textPrimary" component="span">
                     {symptomUtils.symptomScale[scale - 1].const}
                  </Typography>
               </Box>
            </FormLabel>
            <RadioGroup row value={scale} onChange={handleChange}>
               {symptomUtils.symptomScale.map((s) => {
                  return (
                     <Radio
                        color="primary"
                        value={s.value}
                        style={{
                           padding: '0 4px',
                           color: symptomUtils.symptomScale[scale - 1].color
                        }}
                     />
                  )
               })}
            </RadioGroup>
         </FormControl>
      </>
   )
}

export default Scale
