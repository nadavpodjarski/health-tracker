import React, { FC } from "react";
import clsx from "clsx";
import {
  Drawer,
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List
} from "@material-ui/core";

import NavLink from "../../../common/components/nav-link";
import { routes } from "../../../main/routes/constants";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import EmojiSymbolsIcon from "@material-ui/icons/EmojiSymbols";
import DashboardIcon from "@material-ui/icons/Dashboard";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth
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

const container = window !== undefined ? () => window.document.body : undefined;

const MobileDrawer: FC<{ open: boolean; handleOpen: () => void }> = ({
  open,
  handleOpen
}) => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleOpen}
        classes={{
          paper: classes.drawerPaper
        }}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List component="nav">
          <ListItem button component={NavLink} to={routes.nutrition}>
            <ListItemIcon className={classes.listItemIcon}>
              <FastfoodIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                style: {
                  fontSize: "1em",
                  marginLeft: "24px"
                }
              }}
            >
              Nutrition
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to={routes.symptoms}>
            <ListItemIcon className={classes.listItemIcon}>
              <EmojiSymbolsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                style: { fontSize: "1em", marginLeft: "24px" }
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
          <ListItem button component={NavLink} to={routes.dashboard}>
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                style: { fontSize: "1em", marginLeft: "24px" }
              }}
            >
              Dashboard
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
