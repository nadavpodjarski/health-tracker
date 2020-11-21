import React, { FC } from 'react'
import { List, Divider } from '@material-ui/core'

import DrawerListItem from '../list-item'
import { routes } from '../../../../../main/routes/constants'

import FastfoodIcon from '@material-ui/icons/Fastfood'
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols'
import DashboardIcon from '@material-ui/icons/Dashboard'

const DrawerList: FC<{ open: boolean }> = ({ open }) => {
   return (
      <List component="nav">
         <DrawerListItem
            title={'Nutrition'}
            open={open}
            route={routes.nutrition}
            icon={FastfoodIcon}
         />
         <DrawerListItem
            title={'Symptom'}
            open={open}
            route={routes.symptoms}
            icon={EmojiSymbolsIcon}
         />
         <Divider
            style={{
               margin: '4px 0'
            }}
         />
         <DrawerListItem
            title={'Dashboard'}
            open={open}
            route={routes.dashboard}
            icon={DashboardIcon}
         />
      </List>
   )
}

export default DrawerList
