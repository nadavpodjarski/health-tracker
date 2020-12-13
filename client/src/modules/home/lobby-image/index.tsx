import React, { FC } from 'react'
import lobbyImage from '../../../resources/images/loby.jpg'

const LobbyImage: FC<{ height: number | string; width: number | string }> = ({
   height,
   width
}) => {
   return (
      <img
         src={lobbyImage}
         alt=""
         style={{ maxHeight: height, maxWidth: width }}
      />
   )
}

export default LobbyImage
