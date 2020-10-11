import React from "react";
import firebase from "../../main/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Paper, makeStyles, Theme } from "@material-ui/core";
import { routes } from '../../main/routes/constants'
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
  },
  leftScreen: {
    height: "100%",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.7)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rightScreen: {
    height: "100%",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const SigIn = () => {
  const classes = useStyles();
  const UIConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase?.auth?.GoogleAuthProvider?.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: routes.home
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftScreen}></div>
      <div className={classes.rightScreen}>
        <Paper elevation={6}>
          <StyledFirebaseAuth
            uiConfig={UIConfig}
            firebaseAuth={firebase.auth()}
          />
        </Paper>
      </div>
    </div>
  );
};

export default SigIn;
