import axios from "axios";
import { Symptom } from "../../types/symptoms";

export const postSymptom = async (symptom: Symptom) => {
  try {
    const res = await axios.post("/api/symptoms/add-symptom", {
      data: symptom
    });
    return res.data;
  } catch (err) {
    throw err.response?.data;
  }
};

export const getSymptoms = () => {};
export const deleteSymptom = () => {};
export const putSymptom = () => {};
