import { Router } from "express";
import { db } from "../../../db";
import { SymptomModel } from "../../../models/symptoms";

const symptomsRouter = Router();

symptomsRouter.post("/add-symptom", (req, res) => {
  const { data: symptomData } = req.body;
  try {
    const symptom = new SymptomModel({
      author: {
        uid: req.user?.uid,
        displayName: req.user?.name
      },
      symptom: symptomData
    });
    db.collection("symptoms").insertOne(symptom);
    res.json("Symptom Added Successfully");
  } catch (err) {
    console.log(err.stack);
    res.status(500).json("There was an error while adding symptom");
  }
});

export default symptomsRouter;
