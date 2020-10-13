import React from 'react'
import { CircularProgress } from '@material-ui/core'

const Loader = () => {
    return <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}><CircularProgress /></div>
}

export default Loader