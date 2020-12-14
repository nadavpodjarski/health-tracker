import React, { FC } from 'react'
import { List, Divider } from '@material-ui/core'

import DrawerListItem from './list-item'
import { paths } from '../../../../main/routes/routes.config'

import FastfoodIcon from '@material-ui/icons/Fastfood'
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols'
import DashboardIcon from '@material-ui/icons/Dashboard'

const DrawerList: FC<{ open: boolean }> = ({ open }) => {
   return (
      <List component="nav">
         <DrawerListItem
            title={'Nutrition'}
            open={open}
            route={paths.NUTRITION}
            icon={FastfoodIcon}
         />
         <DrawerListItem
            title={'Symptom'}
            open={open}
            route={paths.SYMPTOMS}
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
            route={paths.DASHBOARD}
            icon={DashboardIcon}
         />
      </List>
   )
}

export default DrawerList
