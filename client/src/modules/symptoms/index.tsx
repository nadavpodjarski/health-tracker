import React from "react";

import { useModal } from "../../common/hooks/useModal";
import * as symptomsUtils from "../../utilities/symptoms";

import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Button,
  Typography
} from "@material-ui/core";

import AddSymptomModalContent from "./components/modals/add-symptom-modal-content";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    moduleRoot: {
      display: "flex",
      flex: 1,
      minHeight: 0,
      justifyContent: "center",
      width: "100%"
    },
    innerModule: {
      width: "100%",
      maxWidth: "1200px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    },
    openModalButtonWrapper: {
      display: "flex",
      alignItems: "flex-start",
      width: "100%",
      padding: "32px 0"
    },
    openModalButton: {
      fontSize: "20px",
      background: theme.palette.primary.main,
      color: "white",
      "&:hover": {
        background: theme.palette.primary.main
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px"
      }
    },
    header: {
      minHeight: 200,
      textAlign: "left",
      width: "100%",
      padding: "16px 0",
      [theme.breakpoints.down("sm")]: {
        padding: "16px 8px"
      }
    }
  })
);

const Symptoms = () => {
  const classes = useStyles();

  const [addSymptomModalToggler, AddSymptomModal] = useModal();

  return (
    <div className={classes.moduleRoot}>
      <Box className={classes.innerModule}>
        <Box className={classes.header}>
          <Box>
            <Typography variant="h3">Symptoms</Typography>
            <Typography component="p">This is A symptoms tracker</Typography>
          </Box>
          <Box className={classes.openModalButtonWrapper}>
            <Button
              className={classes.openModalButton}
              onClick={addSymptomModalToggler}
            >
              Add Symptom
            </Button>
          </Box>
        </Box>
      </Box>
      <AddSymptomModal width={1200}>
        <AddSymptomModalContent symptom={symptomsUtils.makeNewSymptom()} />
      </AddSymptomModal>
    </div>
  );
};

export default Symptoms;
