import React, { FC } from 'react'
import { Box, makeStyles, Typography, Grid } from '@material-ui/core'

import ProfileAvatar from '../../../common/components/profile-avatar'
import ThemeSwitch from '../../../common/components/theme-switch'

import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
   appBar: {
      boxShadow: 'none',
      position: 'fixed',
      top: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: theme.mixins.toolbar.minHeight,
      background: theme.palette.background.default,
      [theme.breakpoints.down('sm')]: {
         paddingRight: 0
      }
   },
   innerAppBar: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: 1250,
      justifyContent: 'space-between',
      flex: 1,
      borderBottom: `1px solid ${theme.palette.divider}`,
      height: '100%'
   },
   menuButton: {
      '&:hover': {
         background: 'transparent'
      }
   }
}))

const AppBar: FC = () => {
   const classes = useStyles()
   const moduleTitle = useSelector((state) => state.ui.moduleTitle)

   return (
      <Box className={classes.appBar}>
         <Box className={classes.innerAppBar}>
            <Box>
               <Typography>{moduleTitle}</Typography>
            </Box>
            <Grid container justify="flex-end">
               <Box margin="0 6px">
                  <ThemeSwitch />
               </Box>
               <Box margin="0 6px">
                  <ProfileAvatar />
               </Box>
            </Grid>
         </Box>
      </Box>
   )
}

export default AppBar
