import React from 'react'
import { NavLink as Link, NavLinkProps } from 'react-router-dom'
import { colors } from '../../../main/theme'

const NavLink = ({ ...rest }: NavLinkProps) => {
    return <Link {...rest} activeStyle={{ color: "white", background: colors.ming }} />
}

export default NavLink