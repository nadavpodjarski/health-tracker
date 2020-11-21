import React, { FC } from 'react'
import {
   ListItem,
   ListItemText,
   ListItemIcon,
   makeStyles
} from '@material-ui/core'
import NavLink from '../../../../../common/components/nav-link'

import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
   listItemClose: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '10px',
      padding: '12px 0'
   },
   listItemOpen: {
      flexWrap: 'nowrap',
      fontSize: '16px',
      padding: '12px 24px'
   },
   listItemIcon: {
      justifyContent: 'inherit',
      minWidth: 0
   },
   listItemTextClose: {
      margin: 0,
      paddingTop: '6px'
   },
   listItemTextOpen: {
      paddingTop: 0,
      margin: 0
   }
}))

const DrawerListItem: FC<{
   icon: any
   route: string
   title: string
   open: boolean
}> = ({ route, title, icon: Icon, open }) => {
   const classes = useStyles()
   return (
      <ListItem
         className={clsx({
            [classes.listItemClose]: !open,
            [classes.listItemOpen]: open
         })}
         button
         component={NavLink}
         to={route}
      >
         <ListItemIcon className={classes.listItemIcon}>
            <Icon fontSize="small" />
         </ListItemIcon>
         <ListItemText
            className={clsx({
               [classes.listItemTextOpen]: open,
               [classes.listItemTextClose]: !open
            })}
            primaryTypographyProps={{
               style: {
                  fontSize: '1em',
                  marginLeft: open ? '24px' : 0
               }
            }}
         >
            {title}
         </ListItemText>
      </ListItem>
   )
}

export default DrawerListItem
