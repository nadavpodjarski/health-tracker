import React, { FC } from 'react'
import Logo from '../../../resources/logo/mitummy_logo.svg'

const AppLogo: FC<{ size: number | string; src?: string }> = ({
   size,
   src
}) => {
   return (
      <img
         src={src || Logo}
         alt=""
         style={{ maxWidth: size, maxHeight: size }}
      />
   )
}

export default AppLogo
