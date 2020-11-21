import React from "react";
import { NavLink as Link, NavLinkProps } from "react-router-dom";
import { useTheme } from "@material-ui/core";

const NavLink = ({ ...rest }: NavLinkProps) => {
  const theme = useTheme();
  return (
    <Link
      {...rest}
      activeStyle={{
        background: theme.palette.divider,
        color: theme.palette.primary.main
      }}
    />
  );
};

export default NavLink;
