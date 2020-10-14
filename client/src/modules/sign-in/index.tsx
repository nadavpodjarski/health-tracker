import React from "react";
import firebase from "../../main/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Paper, makeStyles, Theme, Typography } from "@material-ui/core";


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
    callbacks: {
      signInSuccessWithAuthResult: (authResult: any) => {
        return false
      }
    }
  };


  return (
    <>
      {
        <div className={classes.root}>
          <div className={classes.leftScreen}>
            <div style={{ height: "200px", width: "100%", padding: "0 24px", textAlign: "left", display: "flex", alignItems: "center" }}><Typography variant="h3" style={{ color: "white", fontWeight: 700, whiteSpace: "nowrap" }} >Follow Your Guts</Typography></div>
          </div>
          <div className={classes.rightScreen}>
            <Paper elevation={6}>
              <StyledFirebaseAuth
                uiConfig={UIConfig}
                firebaseAuth={firebase.auth()}
              />
            </Paper>
          </div>
        </div>
      }</>
  );
};

export default SigIn;
