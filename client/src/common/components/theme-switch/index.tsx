import React from 'react'
import { IconButton } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../../redux/ui/actions'

import NightsStayIcon from '@material-ui/icons/NightsStay'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

const ThemeSwitch = () => {
   const dispatch = useDispatch()
   const { theme } = useSelector((state: any) => state.ui)

   const onChange = () => {
      dispatch(setTheme(!theme))
   }

   return (
      <IconButton onClick={onChange} size="small">
         {!theme ? (
            <NightsStayIcon fontSize="small" style={{ color: 'darkblue' }} />
         ) : (
            <WbSunnyIcon style={{ color: 'orange' }} fontSize="small" />
         )}
      </IconButton>
   )
}

export default ThemeSwitch
