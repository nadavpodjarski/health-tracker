import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'
import { Menu, Fade, MenuItem, Typography } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/auth/actions'

const ProfileAvatar = () => {
   const { currentUser } = useSelector((state: any) => state.auth)

   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

   const dispatch = useDispatch()

   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
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
         <Menu
            id="fade-menu"
            getContentAnchorEl={null}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center'
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'center'
            }}
            anchorEl={anchorEl}
            keepMounted
            open={!!anchorEl}
            onClose={handleClose}
            TransitionComponent={Fade}
         >
            <MenuItem
               onClick={() => dispatch(logout)}
               style={{ fontSize: '16px' }}
            >
               <PowerSettingsNewIcon fontSize="inherit" />
               <Typography style={{ padding: '0 8px', fontSize: 'inherit' }}>
                  Logout
               </Typography>
            </MenuItem>
         </Menu>
      </>
   )
}

export default ProfileAvatar
