import React, { FC, useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";

import { Symptom } from "../../../../../types/symptoms";
import * as symptomsUtils from "../../../../../utilities/symptoms";

import Duration from "../common/components/duration";
import Name from "../common/components/name";
import Description from "../common/components/description";
import DatePicker from "../common/components/date-picker";
import Scale from "../common/components/scale";
import ActionButtons from "./action-buttons";

const AddSymptomModalContent: FC<{
  onCancelEdit: () => void;
  onConfirmEdit: (symptom: Symptom) => Promise<any>;
  symptomToBeUpdated: Symptom;
  toggler: () => void;
}> = ({ onCancelEdit, onConfirmEdit, symptomToBeUpdated, toggler }) => {
  const [state, setState] = useState(symptomToBeUpdated);
  const [isUpdating, setIsUpdating] = useState(false);

  const onChangeDuration = (duration: string | number) => {
    setState((prevState) => ({
      ...prevState,
      duration
    }));
  };

  const onChangeDescription = (description: string) => {
    setState((prevState) => ({
      ...prevState,
      description
    }));
  };

  const onChangeName = (name: string) => {
    setState((prevState) => ({
      ...prevState,
      name
    }));
  };

  const onAcceptTime = (date: Date) => {
    setState((prevState) => ({
      ...prevState,
      date
    }));
  };

  const onChangeScale = (scale: number) => {
    setState((prevState) => ({
      ...prevState,
      scale
    }));
  };

  const onAdd = async () => {
    try {
      setIsUpdating(true);
      await onConfirmEdit(state);
      toggler();
      setIsUpdating(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box padding="16px 0">
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Edit Symptom
        </Typography>
      </Box>

      <Grid container spacing={3} style={{ marginTop: "32px" }}>
        <Grid item container xs={12} md={6} spacing={2}>
          <Name name={state.name} onChange={onChangeName} />
          <Duration duration={state.duration} onChange={onChangeDuration} />
        </Grid>
        <Grid container item xs={12} md={6} justify="center">
          <Scale scale={state.scale} onChange={onChangeScale} />
        </Grid>
      </Grid>

      <Description
        description={state.description}
        onChange={onChangeDescription}
      />

      <DatePicker date={state.date} onAcceptTime={onAcceptTime} />

      <ActionButtons
        isUpdating={isUpdating}
        onCancel={onCancelEdit}
        isValid={!!symptomsUtils.isValidSymptom(state)}
        onConfirm={onAdd}
      />
    </Box>
  );
};

export default AddSymptomModalContent;
