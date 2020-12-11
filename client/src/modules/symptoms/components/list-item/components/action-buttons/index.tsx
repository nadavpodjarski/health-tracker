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
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
         display: 'none'
      }
   },
   desktopContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '4px 0px',
      flexDirection: 'column',
      borderBottom: `1px solid ${theme.palette.divider}`,
      borderLeft: `1px solid ${theme.palette.divider} `
   },
   mobileView: {
      display: 'flex',
      zIndex: 100,
      [theme.breakpoints.down('sm')]: {
         display: 'flex'
      }
   }
}))

const ListActionButtons: FC<{
   deleteHandler: () => void
   editHandler: () => void
   copyHandler: () => void
}> = ({ deleteHandler, editHandler, copyHandler }) => {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const classes = useStyles()
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const onCopyHandler = () => {
      copyHandler()
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
