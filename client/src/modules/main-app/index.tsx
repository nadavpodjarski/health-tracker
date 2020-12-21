import React, { FC, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'

import MainApp from '../../core/routes/routes.main-app'
import AppBar from './drawer/appbar'

import DesktopDrawer from './drawer/desktop-drawer'
import MobileDrawer from './drawer/mobile-drawer'

import { getTheme } from '../../core/theme/setCurrentTheme'
import { ThemeProvider } from '@material-ui/core'

import { useSelector } from 'react-redux'
import DynamicModal from '../../common/dynamic-modal'

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

const MainAPpDrawer: FC = () => {
   const classes = useStyles()
   const [isDrawerOpen, setIsDrawerOpen] = useState(false)

   const toggleDrawer = () => {
      setIsDrawerOpen((prevState) => !prevState)
   }

   const { theme } = useSelector((state) => state.ui)

   return (
      <>
         <ThemeProvider theme={getTheme(theme)}>
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
                  <MainApp />
               </main>
            </Box>
            <DynamicModal />
         </ThemeProvider>
      </>
   )
}

export default MainAPpDrawer
