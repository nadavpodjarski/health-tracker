import React, { FC } from 'react'
import { Box, makeStyles, Typography, IconButton } from '@material-ui/core'

import ProfileAvatar from '../../../common/components/profile-avatar'
import ThemeSwitch from '../../../common/components/theme-switch'
import AppLogo from '../../../common/components/app-logo'

import MenuIcon from '@material-ui/icons/Menu'

import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
   appBar: {
      zIndex: 999,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen
      }),
      boxShadow: 'none',
      position: 'sticky',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: theme.mixins.toolbar.minHeight,
      background: theme.palette.background.default,
      width: '100%'
   },
   innerAppBar: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: 1200,
      justifyContent: 'space-between',
      flex: 1,
      borderBottom: `1px solid ${theme.palette.divider}`,
      height: '100%',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
         padding: theme.spacing(0, 1)
      }
   },
   menuButton: {
      '&:hover': {
         background: 'transparent'
      },
      [theme.breakpoints.up('md')]: {
         display: 'none'
      }
   }
}))

const AppBar: FC<{ toggleDrawer: () => void }> = ({ toggleDrawer }) => {
   const classes = useStyles()
   const moduleTitle = useSelector((state) => state.ui.moduleTitle)

   return (
      <Box className={classes.appBar}>
         <Box className={classes.innerAppBar}>
            <Box className={classes.menuButton}>
               <IconButton aria-label="open drawer" onClick={toggleDrawer}>
                  <MenuIcon fontSize="small" />
               </IconButton>
            </Box>
            <Box display="flex" height="100%" alignItems="center">
               <AppLogo size={36} />
               <Typography>{moduleTitle}</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-end">
               <Box margin="0 6px">
                  <ThemeSwitch />
               </Box>
               <Box margin="0 6px">
                  <ProfileAvatar />
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default AppBar
