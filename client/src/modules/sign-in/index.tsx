import React from "react";
import { useFirebaseAuth } from "../../main/firebase/useFirebaseAuth";
import {
  makeStyles,
  Theme,
  Typography,
  Button,
  Grid,
  Box
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex"
  },
  leftScreen: {
    height: "100%",
    width: "70%",
    display: "flex",
    background: "rgba(0,0,0,0.7)",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  rightScreen: {
    height: "100%",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  socialLoginButton: {
    border: `1px solid rgba(0,0,0,0.7)`,
    color: "rgba(0,0,0,0.7)",
    width: "100%"
  }
}));

const SigIn = () => {
  const classes = useStyles();
  const { firebaseAuth } = useFirebaseAuth();

  const googleProvider = new firebaseAuth.GoogleAuthProvider();
  const faceBookProvider = new firebaseAuth.FacebookAuthProvider();

  const googleSignIn = async () => {
    await firebaseAuth().signInWithRedirect(googleProvider);
  };

  const facebooksignIn = async () => {
    await firebaseAuth().signInWithRedirect(faceBookProvider);
  };

  return (
    <>
      {
        <div className={classes.root}>
          <div className={classes.leftScreen}>
            <div
              style={{
                height: "200px",
                width: "100%",
                padding: "0 24px",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                background: "inherit"
              }}
            >
              <Typography
                variant="h3"
                style={{
                  color: "white",
                  fontWeight: 700,
                  whiteSpace: "nowrap"
                }}
              >
                Follow Your Gut
              </Typography>
            </div>
          </div>
          <Box className={classes.rightScreen}>
            <Grid
              container
              spacing={2}
              direction="column"
              style={{ maxWidth: "250px" }}
            >
              <Grid item xs>
                <Button
                  className={classes.socialLoginButton}
                  onClick={googleSignIn}
                >
                  Google SIgn-In
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  className={classes.socialLoginButton}
                  onClick={facebooksignIn}
                >
                  Facebook SIgn-In
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      }
    </>
  );
};

export default SigIn;
