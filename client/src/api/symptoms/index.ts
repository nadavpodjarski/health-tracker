import axios from "axios";
import { Symptom } from "../../types/symptoms";

export const getSymptoms = async (startAt: Date, endAt: Date) => {
  try {
    const res = await axios.get("/api/symptoms/get-symptoms", {
      params: {
        startAt,
        endAt
      }
    });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data);
  }
};

export const postSymptom = async (symptom: Symptom) => {
  try {
    const res = await axios.post("/api/symptoms/add-symptom", {
      data: symptom
    });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data);
  }
};

export const deleteSymptom = () => {};
export const putSymptom = () => {};
