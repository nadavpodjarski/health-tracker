import React, { FC } from 'react'
import { TextField, Typography, Grid } from '@material-ui/core'

const Description: FC<{
   description: string
   onChange: (desc: string) => void
}> = ({ description, onChange }) => {
   const onChangeHandler = (
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
   ) => {
      const { value } = event.target
      onChange(value)
   }
   return (
      <>
         <Grid container style={{ padding: '24px 0' }}>
            <Grid item xs>
               <Typography variant="h6" style={{ padding: '12px 0' }}>
                  Description
               </Typography>
               <TextField
                  multiline
                  rows={3}
                  onChange={onChangeHandler}
                  value={description}
                  variant="outlined"
                  fullWidth
               />
            </Grid>
         </Grid>
      </>
   )
}

export default Description
