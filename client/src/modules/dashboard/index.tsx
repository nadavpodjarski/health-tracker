import React, { useEffect } from 'react'

import { Box } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import * as UIActions from '../../redux/ui/actions'

const Dashboard = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(UIActions.setModuleTtiel('Dashboard'))
   }, [])

   return <Box height="100%">Dashboard</Box>
}

export default Dashboard
