import React, { FC, useState } from 'react'
import { Drawer, makeStyles, Divider, Box } from '@material-ui/core'
import MobileDrawerList from './components/list'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
   drawerPaper: {
      width: drawerWidth
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

const container = window !== undefined ? () => window.document.body : undefined

const MobileDrawer: FC = () => {
   const classes = useStyles()

   const [open, setOpen] = useState(false)

   const handleDrawerOpen = () => {
      setOpen((prevState) => !prevState)
   }
   return (
      <Drawer
         container={container}
         variant="temporary"
         open={open}
         onClose={handleDrawerOpen}
         classes={{
            paper: classes.drawerPaper
         }}
         ModalProps={{
            keepMounted: true // Better open performance on mobile.
         }}
      >
         <Box className={classes.toolbar} />
         <Divider />
         <MobileDrawerList />
      </Drawer>
   )
}

export default MobileDrawer
