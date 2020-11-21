import React, { FC } from 'react'
import { Drawer, Divider, makeStyles, Box } from '@material-ui/core'
import clsx from 'clsx'

import DrawerList from './components/list'

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
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
   },
   drawer: {
      flexShrink: 1,
      whiteSpace: 'nowrap',
      flexWrap: 'wrap'
   }
}))

const DekstopDrawer: FC<{ open: boolean }> = ({ open }) => {
   const classes = useStyles()
   return (
      <Drawer
         variant="permanent"
         className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
         })}
         classes={{
            paper: clsx({
               [classes.drawerOpen]: open,
               [classes.drawerClose]: !open
            })
         }}
      >
         <Box className={classes.toolbar} />
         <Divider />
         <DrawerList open={open} />
      </Drawer>
   )
}

export default DekstopDrawer
