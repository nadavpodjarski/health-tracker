import React, { FC } from 'react'
import { Typography, TextField } from '@material-ui/core'

const MealComments: FC<{
   onChange: (value: string) => void
   comments: string
}> = ({ onChange, comments }) => {
   const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target
      onChange(value)
   }

   return (
      <div style={{ paddingTop: '24px' }}>
         <Typography variant="h6" style={{ padding: '12px 0' }}>
            Comments
         </Typography>
         <TextField
            multiline
            rows={2}
            variant="outlined"
            value={comments}
            fullWidth
            onChange={onChangeHandler}
         />
      </div>
   )
}

export default MealComments
