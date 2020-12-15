import React from 'react'
import { Grid } from '@material-ui/core'

import Intro from '../intro'
import LobbyImage from '../lobby-image'

const LandingPage = () => {
   return (
      <Grid container style={{ maxWidth: 1200, flex: 1 }}>
         <Grid item xs={12} md={4}>
            <Intro />
         </Grid>
         <Grid
            item
            container
            justify="flex-end"
            alignItems="flex-end"
            xs={12}
            md={8}
         >
            <LobbyImage width={800} height={600} />
         </Grid>
      </Grid>
   )
}

export default LandingPage
