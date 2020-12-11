import React, { useState } from 'react'

import { Avatar } from '@material-ui/core'
import {
   Box,
   Fade,
   Typography,
   Divider,
   Grid,
   Popover
} from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../redux/auth/actions'

const ProfileAvatar = () => {
   const { currentUser } = useSelector((state: any) => state.auth)

   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

   const dispatch = useDispatch()

   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      console.log(event.currentTarget)
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <>
         <Avatar
            src={currentUser.picture}
            onClick={handleClick}
            style={{ cursor: 'pointer', width: '32px', height: '32px' }}
         />
         <Popover
            id="fade-menu"
            getContentAnchorEl={null}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right'
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right'
            }}
            anchorEl={anchorEl}
            keepMounted
            open={!!anchorEl}
            onClose={handleClose}
            TransitionComponent={Fade}
         >
            <Grid container style={{ padding: '12px' }}>
               <Grid item xs={12}>
                  <Typography style={{ fontSize: 'inherit' }}>
                     {currentUser.displayName}
                  </Typography>
                  <Typography
                     style={{ fontSize: '14px' }}
                     color="textSecondary"
                  >
                     {currentUser.email}
                  </Typography>
               </Grid>
               <Grid item xs={12}>
                  <Divider style={{ margin: '8px 0' }} />
               </Grid>
               <Grid
                  container
                  item
                  xs={12}
                  alignItems="center"
                  onClick={() => dispatch(logout)}
                  style={{ cursor: 'pointer' }}
               >
                  <PowerSettingsNewIcon fontSize="inherit" />
                  <Box style={{ padding: '0 4px' }} />
                  <Typography style={{ fontSize: '14px' }}>Logout</Typography>
               </Grid>
            </Grid>
         </Popover>
      </>
   )
}

export default ProfileAvatar
