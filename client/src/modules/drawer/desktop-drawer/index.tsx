import React, { FC } from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import NavLink from "../../../common/components/nav-link";
import clsx from "clsx";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import EmojiSymbolsIcon from "@material-ui/icons/EmojiSymbols";
import DashboardIcon from "@material-ui/icons/Dashboard";

import { routes } from "../../../main/routes/constants";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    overflowX: "hidden",
    width: "72px",
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
  drawer: {
    flexShrink: 1,
    whiteSpace: "nowrap",
    flexWrap: "wrap"
  },
  listItemClose: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
    padding: "12px 0"
  },
  listItemOpen: {
    flexWrap: "nowrap",
    fontSize: "16px",
    padding: "12px 24px"
  },
  listItemIcon: {
    justifyContent: "inherit",
    minWidth: 0
  },
  listItemTextClose: {
    margin: 0,
    paddingTop: "6px"
  },
  listItemTextOpen: {
    paddingTop: 0,
    margin: 0
  }
}));

const DekstopDrawer: FC<{ open: boolean }> = ({ open }) => {
  const classes = useStyles();
  return (
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
        <ListItem
          className={clsx({
            [classes.listItemClose]: !open,
            [classes.listItemOpen]: open
          })}
          button
          component={NavLink}
          to={routes.nutrition}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <FastfoodIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            className={clsx({
              [classes.listItemTextOpen]: open,
              [classes.listItemTextClose]: !open
            })}
            primaryTypographyProps={{
              style: {
                fontSize: "1em",
                marginLeft: open ? "24px" : 0
              }
            }}
          >
            Nutrition
          </ListItemText>
        </ListItem>
        <ListItem
          className={clsx({
            [classes.listItemClose]: !open,
            [classes.listItemOpen]: open
          })}
          button
          component={NavLink}
          to={routes.symptoms}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <EmojiSymbolsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            className={clsx({
              [classes.listItemTextOpen]: open,
              [classes.listItemTextClose]: !open
            })}
            primaryTypographyProps={{
              style: { fontSize: "1em", marginLeft: open ? "24px" : 0 }
            }}
          >
            Symptoms
          </ListItemText>
        </ListItem>
        <Divider
          style={{
            margin: "4px 0"
          }}
        />
        <ListItem
          className={clsx({
            [classes.listItemClose]: !open,
            [classes.listItemOpen]: open
          })}
          button
          component={NavLink}
          to={routes.dashboard}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            className={clsx({
              [classes.listItemTextOpen]: open,
              [classes.listItemTextClose]: !open
            })}
            primaryTypographyProps={{
              style: { fontSize: "1em", marginLeft: open ? "24px" : 0 }
            }}
          >
            Dashboard
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DekstopDrawer;
