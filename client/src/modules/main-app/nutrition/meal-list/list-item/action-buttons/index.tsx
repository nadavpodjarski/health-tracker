import React, { FC, useState } from 'react'
import { MoreVert, HighlightOff, Edit, FileCopy } from '@material-ui/icons'

import {
   Menu,
   MenuItem,
   Fade,
   IconButton,
   Typography,
   Box,
   makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   desktopView: {
      zIndex: 100,
      [theme.breakpoints.down('sm')]: {
         display: 'none'
      }
   },
   mobileView: {
      display: 'flex',
      zIndex: 100,
      justifyContent: 'flex-end',
      [theme.breakpoints.down('sm')]: {
         display: 'flex'
      }
   }
}))

const ListActionButtons: FC<{
   deleteHandler: () => void
   editHandler: () => void
   copyHanlder: () => void
}> = ({ deleteHandler, editHandler, copyHanlder }) => {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const classes = useStyles()
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const onCopyHandler = () => {
      copyHanlder()
      handleClose()
   }

   const onDeleteHandler = () => {
      deleteHandler()
      handleClose()
   }

   const onEditHadnler = () => {
      editHandler()
      handleClose()
   }
   return (
      <>
         <Box className={classes.mobileView}>
            <IconButton onClick={handleClick}>
               <MoreVert fontSize="small" />
            </IconButton>
            <Menu
               id="fade-menu"
               anchorEl={anchorEl}
               keepMounted
               open={!!anchorEl}
               onClose={handleClose}
               TransitionComponent={Fade}
               style={{ fontSize: '16px' }}
            >
               <MenuItem onClick={onEditHadnler}>
                  <Edit fontSize="inherit" />
                  <Typography style={{ padding: '0 8px', fontSize: 'inherit' }}>
                     Edit
                  </Typography>
               </MenuItem>
               <MenuItem onClick={onCopyHandler}>
                  <FileCopy fontSize="inherit" />
                  <Typography style={{ padding: '0 8px', fontSize: 'inherit' }}>
                     Copy
                  </Typography>
               </MenuItem>
               <MenuItem onClick={onDeleteHandler}>
                  <HighlightOff fontSize="inherit" />
                  <Typography style={{ padding: '0 8px', fontSize: 'inherit' }}>
                     Delete
                  </Typography>
               </MenuItem>
            </Menu>
         </Box>
      </>
   )
}

export default ListActionButtons
