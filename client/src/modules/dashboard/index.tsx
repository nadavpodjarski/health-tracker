import React from 'react'
import { Box } from '@material-ui/core'
const Dashboard = () => {
   return (
      <Box
         style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FCCB4F'
         }}
      >
         <img
            src="https://static.wixstatic.com/media/fc873f_a6d07929437a4160bc26985ab4ce1c64~mv2.gif"
            alt=""
            style={{ maxWidth: '100%' }}
         />
      </Box>
   )
}

export default Dashboard
