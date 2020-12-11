import React, { FC, useState } from 'react'
import { Drawer, Divider, makeStyles, Box, IconButton } from '@material-ui/core'

import clsx from 'clsx'

import DrawerList from './components/list'
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

const DekstopDrawer: FC<{}> = ({}) => {
   const classes = useStyles()

   const [open, setOpen] = useState(false)

   const handleDrawerOpen = () => {
      setOpen((prevOpen) => !prevOpen)
   }

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
         <Box className={classes.toolbar}>
            <Box
               width="100%"
               display="flex"
               justifyContent={open ? 'flex-end' : 'center'}
               alignItems="center"
            >
               <IconButton aria-label="open drawer" onClick={handleDrawerOpen}>
                  <MenuIcon fontSize="small" />
               </IconButton>
            </Box>
         </Box>
         <Divider />
         <DrawerList open={open} />
      </Drawer>
   )
}

export default DekstopDrawer
