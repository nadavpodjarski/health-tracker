import React, { FC, useState } from 'react'

import { createStyles, makeStyles } from '@material-ui/core/styles'

import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'

import DrawerRoutes from '../../main/routes/drawerRoutes'
import AppBar from './appbar'

import DesktopDrawer from './desktop-drawer'
import MobileDrawer from './mobile-drawer'

const useStyles = makeStyles((theme) =>
   createStyles({
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
         flexDirection: 'column'
      }
   })
)

const HomeDrawer: FC = () => {
   const classes = useStyles()

   return (
      <Box className={classes.root}>
         <CssBaseline />
         <Hidden smDown>
            <DesktopDrawer />
         </Hidden>
         <Hidden mdUp>
            <MobileDrawer />
         </Hidden>
         <main className={classes.content}>
            <AppBar />
            <Box className={classes.toolbar} />
            <DrawerRoutes />
         </main>
      </Box>
   )
}

export default HomeDrawer
