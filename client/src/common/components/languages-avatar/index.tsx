import React, { useState, useEffect } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import { Popover, Avatar, Icon } from '@material-ui/core'

import languages from '../../../core/languages-not-in-use-yet/languagesMeta.json'
import { Typography } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import * as languagesActions from '../../../redux/languages/actions'
import { flags } from '../../../core/languages-not-in-use-yet/languages-flags'

export default function ControlledOpenSelect() {
   const [langs, setlangs] = useState<any>()
   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

   const dispatch = useDispatch()

   const { chosenLanguage } = useSelector((state: any) => state.languages)

   useEffect(() => {
      setlangs(renderLangs(languages))
      //eslint-disable-next-line
   }, [])

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const renderLangs = (languages: any) => {
      const languagesKeys = Object.entries(languages).map(
         (lang: any) => lang[1].const
      )

      return languagesKeys.map((lang, i) => {
         return (
            <MenuItem key={`lang_${i}`} value={lang}>
               <Typography
                  style={{ textTransform: 'uppercase' }}
                  onClick={() => {
                     dispatch(languagesActions.setLanguage(lang))
                     handleClose()
                  }}
               >
                  {lang}
               </Typography>
            </MenuItem>
         )
      })
   }

   const open = Boolean(anchorEl)

   return (
      <div>
         <Avatar
            src={flags[chosenLanguage.const]}
            component={Icon}
            onClick={handleClick}
            style={{ cursor: 'pointer', marginRight: '16px' }}
         />
         <Popover
            id={'LanguagesMenu'}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center'
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'center'
            }}
         >
            {langs}
         </Popover>
      </div>
   )
}
