import React, { useState } from 'react'
import {
   TextField,
   Box,
   Button,
   Typography,
   makeStyles
} from '@material-ui/core'

import Loader from '../../../../common/components/loader'

import { useSelector, useDispatch } from 'react-redux'
import * as homeActions from '../../../../redux/home/actions'

const useStyles = makeStyles((theme) => ({
   textField: {
      margin: theme.spacing(1, 0)
   },
   buttonWrapper: {
      margin: theme.spacing(2, 0)
   },
   button: {
      background: theme.palette.secondary.main,
      color: theme.palette.common.white,
      '&:hover': {
         background: theme.palette.secondary.main,
         color: theme.palette.common.white
      },
      width: '100%',
      '&:disabled': {
         background: 'lightgrey',
         color: theme.palette.secondary.main
      },
      height: 56
   },
   contantfomrWrapper: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      [theme.breakpoints.down('sm')]: {
         alignItems: 'center'
      }
   }
}))

const ContactForm = () => {
   const classes = useStyles()
   const dispatch = useDispatch()
   const [state, setState] = useState({
      email: '',
      subject: '',
      message: ''
   })

   const { isSending } = useSelector((state) => state.home)

   const onChangeHandler = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { value, id } = e.target
      setState((prevState) => ({
         ...prevState,
         [id]: value
      }))
   }

   const onSubmitHandler = async (e: React.FormEvent) => {
      e.preventDefault()
      await dispatch(homeActions.sendContactForm(state))
      setState({
         email: '',
         subject: '',
         message: ''
      })
   }

   return (
      <Box className={classes.contantfomrWrapper}>
         <Box maxWidth="300px">
            <Box textAlign="left" padding="8px 0">
               <Typography>Feel free to contact</Typography>
               <Typography color="textSecondary" style={{ fontSize: '14px' }}>
                  Leave your feedbacks here
               </Typography>
            </Box>
            <form onSubmit={onSubmitHandler}>
               <Box className={classes.textField}>
                  <TextField
                     id="subject"
                     onChange={onChangeHandler}
                     value={state.subject}
                     placeholder="Subject"
                     variant="outlined"
                     fullWidth
                  />
               </Box>
               <Box className={classes.textField}>
                  <TextField
                     id="email"
                     onChange={onChangeHandler}
                     value={state.email}
                     placeholder="Email"
                     variant="outlined"
                     fullWidth
                     type="email"
                     InputProps={{
                        type: 'email',
                        required: true
                     }}
                  />
               </Box>
               <Box className={classes.textField}>
                  <TextField
                     id="message"
                     onChange={onChangeHandler}
                     value={state.message}
                     placeholder="Message"
                     variant="outlined"
                     rows={3}
                     multiline
                     fullWidth
                     InputProps={{
                        type: 'text',
                        required: true
                     }}
                  />
               </Box>
               <Box className={classes.buttonWrapper}>
                  <Button
                     endIcon={
                        isSending ? <Loader size={12} color="black" /> : ''
                     }
                     type="submit"
                     className={classes.button}
                     disabled={isSending}
                  >
                     Send
                  </Button>
               </Box>
            </form>
         </Box>
      </Box>
   )
}

export default ContactForm
