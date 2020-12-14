import React, { FC, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'

import AppContent from '../../main/routes/app.content'
import AppBar from './appbar'

import DesktopDrawer from './desktop-drawer'
import MobileDrawer from './mobile-drawer'

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      height: '100%'
   },
   hide: {
      display: 'none'
   },
   toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
   },
   content: {
      flexGrow: 1,
      justifyContent: 'center',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
   }
}))

const HomeDrawer: FC = () => {
   const classes = useStyles()
   const [isDrawerOpen, setIsDrawerOpen] = useState(false)

   const toggleDrawer = () => {
      setIsDrawerOpen((prevState) => !prevState)
   }

   return (
      <Box className={classes.root}>
         <CssBaseline />
         <Hidden smDown>
            <DesktopDrawer
               isDrawerOpen={isDrawerOpen}
               toggleDrawer={toggleDrawer}
            />
         </Hidden>
         <Hidden mdUp>
            <MobileDrawer
               isDrawerOpen={isDrawerOpen}
               toggleDrawer={toggleDrawer}
            />
         </Hidden>
         <main className={classes.content}>
            <AppBar toggleDrawer={toggleDrawer} />
            <AppContent />
         </main>
      </Box>
   )
}

export default HomeDrawer
