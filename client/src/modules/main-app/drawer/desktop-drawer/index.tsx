import React, { FC } from 'react'
import { Drawer, Divider, makeStyles, Box, IconButton } from '@material-ui/core'

import clsx from 'clsx'

import DrawerList from './list'
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
   drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen
      })
   },
   drawerClose: {
      overflowX: 'hidden',
      width: '72px',
      [theme.breakpoints.down('sm')]: {
         width: '0'
      }
   },
   toolbar: {
      display: 'flex',
      alignItems: 'center',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
   },
   drawer: {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      flexWrap: 'wrap'
   }
}))

const DekstopDrawer: FC<{
   isDrawerOpen: boolean
   toggleDrawer: () => void
}> = ({ isDrawerOpen, toggleDrawer }) => {
   const classes = useStyles()

   return (
      <Drawer
         variant="permanent"
         className={clsx(classes.drawer, {
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen
         })}
         classes={{
            paper: clsx({
               [classes.drawerOpen]: isDrawerOpen,
               [classes.drawerClose]: !isDrawerOpen
            })
         }}
      >
         <Box className={classes.toolbar}>
            <Box
               width="100%"
               display="flex"
               justifyContent={isDrawerOpen ? 'flex-end' : 'center'}
               alignItems="center"
            >
               <IconButton aria-label="open drawer" onClick={toggleDrawer}>
                  <MenuIcon fontSize="small" />
               </IconButton>
            </Box>
         </Box>
         <Divider />
         <DrawerList open={isDrawerOpen} />
      </Drawer>
   )
}

export default DekstopDrawer
