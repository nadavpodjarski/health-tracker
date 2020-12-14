import React from 'react'
import { List, Divider } from '@material-ui/core'

import DrawerMobileListItem from './list-item'

import { paths } from '../../../../main/routes/routes.config'

import FastfoodIcon from '@material-ui/icons/Fastfood'
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols'
import DashboardIcon from '@material-ui/icons/Dashboard'

const DrawerMobileList = () => {
   return (
      <List component="nav">
         <DrawerMobileListItem
            title={'Nutrition'}
            route={paths.NUTRITION}
            icon={FastfoodIcon}
         />
         <DrawerMobileListItem
            title={'Symptom'}
            route={paths.SYMPTOMS}
            icon={EmojiSymbolsIcon}
         />
         <Divider
            style={{
               margin: '4px 0'
            }}
         />
         <DrawerMobileListItem
            title={'Dashboard'}
            route={paths.DASHBOARD}
            icon={DashboardIcon}
         />
      </List>
   )
}

export default DrawerMobileList
