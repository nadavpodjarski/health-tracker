import React, { FC } from 'react'
import {
   AppBar as Appbar,
   Toolbar,
   IconButton,
   Box,
   makeStyles
} from '@material-ui/core'
import clsx from 'clsx'

import MenuIcon from '@material-ui/icons/Menu'

import ProfileAvatar from '../../../common/components/profile-avatar'
import ThemeSwitch from '../../../common/components/theme-switch'

const useStyles = makeStyles((theme) => ({
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen
      }),
      background: theme.palette.background.paper,
      [theme.breakpoints.down('sm')]: {
         paddingRight: 0
      }
   },
   appBarShift: {
      marginLeft: 0,
      width: `100%`
   },
   menuButton: {
      '&:hover': {
         background: 'transparent'
      }
   }
}))

const AppBar: FC<{ handleDrawerOpen: () => void; open: boolean }> = ({
   handleDrawerOpen,
   open
}) => {
   const classes = useStyles()
   return (
      <Appbar
         position="fixed"
         className={clsx(classes.appBar, {
            [classes.appBarShift]: open
         })}
      >
         <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
               aria-label="open drawer"
               onClick={handleDrawerOpen}
               edge="start"
               className={classes.menuButton}
            >
               <MenuIcon fontSize="small" />
            </IconButton>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1
               }}
            >
               {/* <Box display="flex" flex={1} justifyContent="flex-start">
               </Box> */}

               <Box display="flex" justifyContent="flex-end" flex={1}>
                  <Box margin="0 16px" display="flex" alignItems="center">
                     <ThemeSwitch />
                  </Box>

                  <ProfileAvatar />
               </Box>
            </div>
         </Toolbar>
      </Appbar>
   )
}

export default AppBar
