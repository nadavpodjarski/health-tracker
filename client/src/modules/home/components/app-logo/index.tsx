import React, { FC } from 'react'
import Logo from '../../../../resources/logo/ibd-logo.png'

const AppLogo: FC<{ size: number | string }> = ({ size }) => {
   return <img src={Logo} alt="" style={{ maxWidth: size, maxHeight: size }} />
}

export default AppLogo
