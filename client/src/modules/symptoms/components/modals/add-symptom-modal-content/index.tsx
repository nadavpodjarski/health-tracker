import React, { FC, useState } from "react";
import { Box, Typography, TextField, Grid } from "@material-ui/core";
import { Symptom } from "../../../../../types/symptoms";

const AddSymptomModalContent: FC<{ symptom: Symptom }> = ({ symptom }) => {
  const [state, setState] = useState<Symptom>(symptom);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  return (
    <Box display="flex" flexDirection="column">
      <Box padding="24px 0">
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Add Symptom
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item container xs={12} md={6} spacing={2}>
          <Grid item xs={8}>
            <TextField
              variant="outlined"
              placeholder="Symptom"
              helperText="I.e Abdominal Pain, Nausea, Fatigue ..."
              FormHelperTextProps={{
                style: {
                  marginLeft: 0
                }
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              placeholder="Duration"
              helperText="* minutes"
              FormHelperTextProps={{
                style: {
                  marginLeft: 0
                }
              }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6}>
          Scaler
        </Grid>
      </Grid>
      <Grid container style={{ padding: "24px 0" }}>
        <Grid item xs>
          <Typography variant="h6" style={{ padding: "12px 0" }}>
            Description
          </Typography>
          <TextField multiline rows={3} variant="outlined" fullWidth />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddSymptomModalContent;
