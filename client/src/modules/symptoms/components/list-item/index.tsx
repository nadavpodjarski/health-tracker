import React, { FC } from "react";
import { ListItem, Grid, makeStyles, Box, Typography } from "@material-ui/core";

import ListActionButtons from "./action-buttons";

import { Symptom, SymptomDoc } from "../../../../types/symptoms";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    margin: "6px 0",
    boxShadow: theme.shadows[0],
    borderRadius: "4px",
    border: `1px solid ${theme.palette.divider}`
  },

  actionButtonWrapper: {
    height: "100%"
  }
}));

const SymptomListItem: FC<{
  item: SymptomDoc;
  setDeleteSymptom: (docId: string) => void;
  setEditSymptom: (item: SymptomDoc) => void;
  setCopySymptom: (meal: Symptom) => void;
}> = ({ item, setDeleteSymptom, setEditSymptom, setCopySymptom }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ListItem
        key={`item-${item.id}`}
        style={{
          padding: "16px 16px"
        }}
        component={Grid}
        container
      >
        <Grid
          container
          item
          xs
          style={{ padding: "12px 0 24px 0" }}
          alignItems="center"
        >
          <Grid item xs={6} container alignItems="center">
            <Box display="inline-block">
              <Typography
                component="span"
                color="textSecondary"
                style={{ margin: "0 5px", fontSize: "12px" }}
              ></Typography>
            </Box>
          </Grid>

          <Grid
            item
            container
            xs
            justify="flex-end"
            className={classes.actionButtonWrapper}
            spacing={3}
          >
            <ListActionButtons
              deleteHandler={() => setDeleteSymptom(item.id)}
              editHandler={() => setEditSymptom(item)}
              copyHanlder={() => setCopySymptom(item.symptom)}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          xs={12}
          spacing={1}
          style={{ whiteSpace: "nowrap" }}
        ></Grid>
      </ListItem>
    </Box>
  );
};

export default SymptomListItem;
