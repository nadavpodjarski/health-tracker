import React from 'react'
import { List, Divider } from '@material-ui/core'

import DrawerMobileListItem from './list-item'

import { routes } from '../../../../main/routes/constants'

import FastfoodIcon from '@material-ui/icons/Fastfood'
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols'
import DashboardIcon from '@material-ui/icons/Dashboard'

const DrawerMobileList = () => {
   return (
      <List component="nav">
         <DrawerMobileListItem
            title={'Nutrition'}
            route={routes.nutrition}
            icon={FastfoodIcon}
         />
         <DrawerMobileListItem
            title={'Symptom'}
            route={routes.symptoms}
            icon={EmojiSymbolsIcon}
         />
         <Divider
            style={{
               margin: '4px 0'
            }}
         />
         <DrawerMobileListItem
            title={'Dashboard'}
            route={routes.dashboard}
            icon={DashboardIcon}
         />
      </List>
   )
}

export default DrawerMobileList
