import React, { FC, useState } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  makeStyles,
  Theme,
  Box,
  Typography
} from "@material-ui/core";

import Loader from "../../../../common/components/loader";
import SymptomListItem from "../list-item";

import AddSymptomModalContent from "../modals/add-symptom-modal-content";
import DeleteSymptomMdalContent from "../modals/delete-symptom-modal-content";
import EditSymptomModalContent from "../modals/edit-symptom-modal-content";

import { Symptom, SymptomDoc, Symptoms } from "../../../../types/symptoms";
import { useModal } from "../../../../common/hooks/useModal";

import * as _ from "lodash";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    overflowY: "auto",
    flex: 1,
    minHeight: 0,
    scrollbarWidth: "none",
    marginBottom: theme.spacing(1),
    maxWidth: "100%"
  },
  listSection: {
    backgroundColor: "inherit",
    fontSize: "22px"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  subHeaderWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 0"
    }
  },
  subHeader: {
    background: theme.palette.background.paper,
    borderRadius: "50px",
    boxShadow: theme.shadows[3],
    padding: "0 15px",
    border: `2px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.85)"
    }
  }
}));

const SymptomsList: FC<{
  isLoading: boolean;
  symptoms: Symptoms;
  onCopySymptom: (symptom: Symptom) => Promise<any>;
  onDeleteSymptom: (docId: string) => Promise<any>;
  onEditSymptom: (symptom: Symptom, docId: string) => Promise<any>;
}> = ({
  isLoading,
  symptoms,
  onDeleteSymptom,
  onEditSymptom,
  onCopySymptom
}) => {
  const [symptomIdToBeDeleted, setSymptomIdToBeDeleted] = useState<string>("");
  const [copiedSymptom, setCopiedSymptom] = useState<Symptom | null>();
  const [
    symptomDocToBeUpdated,
    setSymptomDocToBeUpdated
  ] = useState<SymptomDoc | null>(null);

  const [editModalToggler, EditModal] = useModal();
  const [deleteModalToggler, DeleteModal] = useModal();
  const [copyModalToggler, CopyModal] = useModal();

  const classes = useStyles();

  const setDeleteSymptom = (docId: string) => {
    setSymptomIdToBeDeleted(docId);
    deleteModalToggler();
  };

  const setEditSymptom = (item: SymptomDoc) => {
    setSymptomDocToBeUpdated(_.cloneDeep(item));
    editModalToggler();
  };

  const setCopySymptom = (meal: Symptom) => {
    const newSymptom = _.cloneDeep(meal);
    newSymptom.date = new Date();
    setCopiedSymptom(newSymptom);
    copyModalToggler();
  };

  const onCancelDelete = () => {
    setSymptomIdToBeDeleted("");
    deleteModalToggler();
  };

  const onCancelEdit = () => {
    setSymptomDocToBeUpdated(null);
    editModalToggler();
  };

  const onConfirmCopy = async (symptom: Symptom) => {
    try {
      await onCopySymptom(symptom);
      setCopiedSymptom(null);
      copyModalToggler();
    } catch (err) {}
  };

  const onConfirmDelete = async (docId: string) => {
    try {
      await onDeleteSymptom(docId);
      setSymptomIdToBeDeleted("");
      deleteModalToggler();
    } catch (err) {}
  };

  const onConfirmEdit = async (symptom: Symptom) => {
    if (symptomDocToBeUpdated?.id) {
      await onEditSymptom(symptom, symptomDocToBeUpdated.id);
      setSymptomDocToBeUpdated(null);
      editModalToggler();
    }
  };

  return (
    <List
      component={Box}
      className={classes.root}
      subheader={<li />}
      disablePadding
    >
      {!isLoading ? (
        symptoms.length ? (
          <>
            {symptoms?.map((symptomsByDate, i) => {
              return (
                <li key={`section-${i}`} className={classes.listSection}>
                  <ul className={classes.ul}>
                    <ListSubheader className={classes.subHeaderWrapper}>
                      <Box className={classes.subHeader}>
                        {symptomsByDate._id}
                      </Box>
                    </ListSubheader>
                    {symptomsByDate.symptoms.map((item, i: number) => {
                      return (
                        <SymptomListItem
                          key={`symptom-list-item_${i}`}
                          item={item}
                          setCopySymptom={setCopySymptom}
                          setDeleteSymptom={setDeleteSymptom}
                          setEditSymptom={setEditSymptom}
                        />
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </>
        ) : (
          <Box
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h5">No Symptoms</Typography>
          </Box>
        )
      ) : (
        <ListItem
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Loader title="Fetching Symptoms" />
        </ListItem>
      )}

      {/*Delete Modal*/}
      {symptomIdToBeDeleted ? (
        <DeleteModal width={500}>
          <DeleteSymptomMdalContent
            onCancelDelete={onCancelDelete}
            onConfirmDelete={(event) => onConfirmDelete(symptomIdToBeDeleted)}
          />
        </DeleteModal>
      ) : (
        ""
      )}

      {/*Edit Modal*/}
      {symptomDocToBeUpdated ? (
        <EditModal width={1200}>
          <EditSymptomModalContent
            symptomToBeUpdated={symptomDocToBeUpdated.symptom}
            toggler={editModalToggler}
            onConfirmEdit={onConfirmEdit}
            onCancelEdit={onCancelEdit}
          />
        </EditModal>
      ) : (
        ""
      )}

      {/*Copy Modal*/}
      {copiedSymptom ? (
        <CopyModal width={1200}>
          <AddSymptomModalContent
            symptom={copiedSymptom}
            onAddSymptom={onConfirmCopy}
            modalToggler={copyModalToggler}
          />
        </CopyModal>
      ) : (
        ""
      )}
    </List>
  );
};

export default SymptomsList;