import React, { FC } from 'react'
import { TextField } from '@material-ui/core'

const Name: FC<{ name: string; onChange: (name: string) => void }> = ({
   name,
   onChange
}) => {
   const onChangeHandler = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { value } = event.target
      onChange(value)
   }
   return (
      <TextField
         fullWidth
         variant="outlined"
         placeholder="* Symptom"
         helperText="I.e Abdominal Pain, Nausea, Fatigue ..."
         onChange={onChangeHandler}
         error={!name}
         value={name}
         FormHelperTextProps={{
            style: {
               marginLeft: 0
            }
         }}
      />
   )
}

export default Name
