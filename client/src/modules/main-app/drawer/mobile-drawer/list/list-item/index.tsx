import React, { FC } from 'react'
import {
   ListItem,
   ListItemText,
   ListItemIcon,
   makeStyles
} from '@material-ui/core'
import NavLink from '../../../../../../shared/components/nav-link'

const useStyles = makeStyles((theme) => ({
   listItemIcon: {
      justifyContent: 'inherit',
      minWidth: 0
   }
}))

const DrawerMobileListItem: FC<{ route: string; icon: any; title: string }> = ({
   title,
   icon: Icon,
   route
}) => {
   const classes = useStyles()
   return (
      <ListItem button component={NavLink} to={route}>
         <ListItemIcon className={classes.listItemIcon}>
            <Icon fontSize="small" />
         </ListItemIcon>
         <ListItemText
            primaryTypographyProps={{
               style: {
                  fontSize: '1em',
                  marginLeft: '24px'
               }
            }}
         >
            {title}
         </ListItemText>
      </ListItem>
   )
}

export default DrawerMobileListItem
