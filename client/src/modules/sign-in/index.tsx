import React from "react";
import { useFirebaseAuth } from "../../main/firebase/useFirebaseAuth";
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
  const { firebaseAuth } = useFirebaseAuth()
  const UIConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebaseAuth?.GoogleAuthProvider?.PROVIDER_ID,
      firebaseAuth?.FacebookAuthProvider.PROVIDER_ID,
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
            <div style={{ height: "200px", width: "100%", padding: "0 24px", textAlign: "left", display: "flex", alignItems: "center" }}><Typography variant="h3" style={{ color: "white", fontWeight: 700, whiteSpace: "nowrap" }} >Follow Your Gut</Typography></div>
          </div>
          <div className={classes.rightScreen}>
            <Paper elevation={6}>
              <StyledFirebaseAuth
                uiConfig={UIConfig}
                firebaseAuth={firebaseAuth()}
              />
            </Paper>
          </div>
        </div>
      }</>
  );
};

export default SigIn;
