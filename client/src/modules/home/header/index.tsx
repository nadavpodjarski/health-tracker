import React, { FC } from 'react'
import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core'
import Logo from '../../../common/components/app-logo'
import NavLink from '../../../common/components/nav-link'

const useStyles = makeStyles((theme) => ({
   header: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
   },
   navLinksWrapper: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
   },
   loginButton: {
      border: `1px solid ${theme.palette.primary.main}`,
      textTransform: 'none',
      color: theme.palette.primary.main,
      borderRadius: 25,
      width: 100,
      '&:hover': {
         background: theme.palette.primary.main,
         color: theme.palette.common.white
      }
   }
}))

const Header: FC<{ loginFormModalToggler: () => void }> = ({
   loginFormModalToggler
}) => {
   const classes = useStyles()
   return (
      <Box className={classes.header}>
         <Box
            padding={2}
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            maxWidth={1200}
         >
            <Box
               display="flex"
               flex={1}
               justifyContent="flex-start"
               height="100%"
               alignItems="center"
            >
               <Logo size={48} />
               <Typography
                  variant="h4"
                  style={{
                     paddingLeft: 8,
                     letterSpacing: 3
                  }}
               >
                  Mitummy
               </Typography>
            </Box>
            <Box className={classes.navLinksWrapper}>
               <Button
                  className={classes.loginButton}
                  onClick={loginFormModalToggler}
               >
                  Login
               </Button>
            </Box>
         </Box>
      </Box>
   )
}

export default Header
