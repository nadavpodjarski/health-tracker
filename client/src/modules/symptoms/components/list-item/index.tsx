import React, { FC, useState } from "react";
import { ListItem, Grid, makeStyles, Box } from "@material-ui/core";

import ListActionButtons from "./components/action-buttons";
import Name from "./components/name";
import Description from "./components/description";
import Duration from "./components/duration";
import Scale from "./components/scale";

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
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  return (
    <Box className={classes.root}>
      <ListItem
        key={`item-${item.id}`}
        style={{
          padding: "16px 16px",
          whiteSpace: "nowrap",
          position: "relative"
        }}
        component={Grid}
        container
      >
        <Grid container item xs={9} alignItems="center" spacing={3}>
          <Grid item xs={12} container alignItems="center">
            <Name name={item.symptom.name} date={item.symptom.date} />
          </Grid>
          <Grid item xs={12} md={4}>
            {item.symptom.duration ? (
              <Duration duration={item.symptom.duration} />
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Scale scale={item.symptom.scale} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Description
              isAvailable={!!item.symptom.description}
              setIsOpen={setIsDescriptionOpen}
              isOpen={isDescriptionOpen}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs
          justify="flex-end"
          alignItems="center"
          className={classes.actionButtonWrapper}
          spacing={3}
        >
          <ListActionButtons
            deleteHandler={() => setDeleteSymptom(item.id)}
            editHandler={() => setEditSymptom(item)}
            copyHanlder={() => setCopySymptom(item.symptom)}
          />
        </Grid>
      </ListItem>
    </Box>
  );
};

export default SymptomListItem;
