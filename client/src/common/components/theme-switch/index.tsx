import React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Switch from '@material-ui/core/Switch'
import { IconButton } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../../redux/ui/actions'

import NightsStayIcon from '@material-ui/icons/NightsStay'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1)
   },
   switchBase: {
      padding: 1,
      color: 'orange',
      background: 'white',
      '&$checked': {
         transform: 'translateX(16px)',
         color: theme.palette.common.white,
         '& + $track': {
            opacity: 1,
            border: 'none',
            background: theme.palette.background.default
         }
      },
      '&$focusVisible $thumb': {
         border: '6px solid #fff'
      }
   },
   thumb: {
      width: 24,
      height: 24
   },
   track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      background: theme.palette.background.default,
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border'])
   },
   checked: {},
   focusVisible: {}
}))

const ThemeSwitch = () => {
   const classes = useStyles()
   const dispatch = useDispatch()
   const { theme } = useSelector((state: any) => state.ui)

   const onChange = () => {
      dispatch(setTheme(!theme))
   }

   return (
      // <Switch
      //    focusVisibleClassName={classes.focusVisible}
      //    disableRipple
      //    checked={theme}
      //    classes={{
      //       root: classes.root,
      //       switchBase: classes.switchBase,
      //       thumb: classes.thumb,
      //       track: classes.track,
      //       checked: classes.checked
      //    }}
      //    onChange={onChange}
      // />
      <IconButton onClick={onChange} size="small">
         {!theme ? (
            <NightsStayIcon fontSize="small" />
         ) : (
            <WbSunnyIcon style={{ color: 'orange' }} fontSize="small" />
         )}
      </IconButton>
   )
}

export default ThemeSwitch
