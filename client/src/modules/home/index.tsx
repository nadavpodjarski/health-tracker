import React, { FC, useState } from "react";
import NavLink from "../../common/components/nav-link";
import clsx from "clsx";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";

import { routes } from "../../main/routes/constants";
import MenuRoutes from "../../main/routes/menuRoutes";

import { dictionary } from "../../main/languages-not-in-use-yet/app-dictionary";
import SignOutButton from "./components/sign-out-button";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      height: "100%"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      background: "white",
      color: "black"
    },
    appBarShift: {
      marginLeft: 0,
      width: `100%`
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 1,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: "72px"
      },
      [theme.breakpoints.down("sm")]: {
        width: "0"
      }
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
      maxWidth: `calc( 1200px + ${theme.spacing(4)}px )`,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: `0 ${theme.spacing(2)}px`
    }
  })
);

const Home: FC = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <SelectLanguage /> */}
            <SignOutButton />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List component="nav">
          <ListItem button component={NavLink} to={routes.foodTracker}>
            <ListItemIcon>
              <FastfoodIcon />
            </ListItemIcon>
            <ListItemText>Food Tracker</ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to={routes.sportTracker}>
            <ListItemIcon>
              <SportsHandballIcon />
            </ListItemIcon>
            <ListItemText>Sport Tracker</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MenuRoutes />
      </main>
    </div>
  );
};

export default Home;
