import { Dispatch } from "react";
import * as types from "../constants";
import * as api from "../../../../api/symptoms";
import { Symptom } from "../../../../types/symptoms";
import * as uiActions from "../../../ui/actions";

// GET SYMPTOMS
const createGetSymptoms = () => {
  return {
    type: types.GET_SYMPTOMS
  };
};

// ADD SYMPTOM
const createAddSymptom = () => {
  return {
    type: types.ADD_SYMPTOM
  };
};

const addSymptomSuccess = (data: any) => (dispatch: Dispatch<any>) => {
  dispatch(uiActions.setSnackBar({ type: "success", msg: data.message }));
  return {
    type: types.ADD_SYMPTOM_SUCCESS
  };
};

export const addSymptom = (symptom: Symptom) => async (
  dispatch: Dispatch<any>
) => {
  dispatch(createAddSymptom);
  try {
    const res = await api.postSymptom(symptom);
    dispatch(addSymptomSuccess(res));
  } catch (err) {
    dispatch(requestErr(err.message));
  }
};

// DELETE SYMPTOM
const createDeleteSymptom = () => {
  return {
    type: types.DELETE_SYMPTOM
  };
};

// EDIT SYMPTOM
const createEditSymptom = () => {
  return {
    type: types.EDIT_SYMPTOM
  };
};

// ERROR HANDLER
const requestErr = (errMessage: any) => (dispatch: Dispatch<any>) => {
  if (typeof errMessage === "string")
    dispatch(uiActions.setSnackBar({ type: "error", msg: errMessage }));

  dispatch({
    type: types.REQUEST_ERR,
    payload: errMessage
  });
};
