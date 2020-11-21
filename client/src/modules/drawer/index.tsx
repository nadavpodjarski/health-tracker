import React, { FC, useState } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";

import DrawerRoutes from "../../main/routes/drawerRoutes";
import AppBar from "./appbar";

import DesktopDrawer from "./desktop-drawer";
import MobileDrawer from "./mobile-drawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%"
    },

    hide: {
      display: "none"
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      justifyContent: "center",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  })
);

const HomeDrawer: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <Hidden smDown>
        <DesktopDrawer open={open} />
      </Hidden>
      <Hidden mdUp>
        <MobileDrawer open={open} handleOpen={handleDrawerOpen} />
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <DrawerRoutes />
      </main>
    </div>
  );
};

export default HomeDrawer;
