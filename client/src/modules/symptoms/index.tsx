import React from "react";

import { useModal } from "../../common/hooks/useModal";

import { colors } from "../../main/theme/colors";
import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Button
} from "@material-ui/core";

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
    openModalButton: {
      fontSize: "20px",
      background: colors.tourquize,
      color: "white",
      "&:hover": {
        background: colors.tourquize
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px"
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
        <Box display="flex" alignItems="flex-start" height={80} width="100%">
          <Button
            className={classes.openModalButton}
            onClick={addSymptomModalToggler}
          >
            Add Symptom
          </Button>
        </Box>
      </Box>
      <AddSymptomModal width={1200}></AddSymptomModal>
    </div>
  );
};

export default Symptoms;
