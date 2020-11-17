import { Router } from "express";
import { db } from "../../../db";
import { SymptomModel } from "../../../models/symptoms";

import { ObjectId } from "bson";

import * as helpers from "../../../helpers";
import * as _ from "lodash";

const symptomsRouter = Router();

//-------------GET Symptoms----------//

symptomsRouter.get("/get-symptoms", async (req, res) => {
  const { startAt, endAt } = req.query;

  if (!startAt || !endAt)
    return res.status(400).json("Unable To Proccess Request");

  try {
    const start = helpers.getStartDayDate(startAt as string);
    const end = helpers.getEndDayDate(endAt as string);

    const symptoms = await db
      .collection("symptoms")
      .aggregate([
        {
          $match: {
            $and: [
              {
                "symptom.date": { $gte: start, $lte: end }
              },
              { "author.uid": req.user?.uid }
            ]
          }
        },

        {
          $group: {
            _id: {
              $dateToString: {
                format: "%d/%m/%Y",
                date: "$symptom.date"
              }
            },
            symptoms: { $push: { symptom: "$symptom", id: "$_id" } }
          }
        },
        { $sort: { "symptoms.symptom.date": -1 } }
      ])
      .toArray();

    return res.json(symptoms);
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("There was an Error while fetching symptoms");
  }
});

//------------ ADD Symptoms ----------//

symptomsRouter.post("/add-symptom", (req, res) => {
  const { data: symptomData } = req.body;

  if (_.isEmpty(symptomData)) res.status(400).json("Unble to Proccess Request");

  symptomData.date = helpers.stringToDate(symptomData.date);

  try {
    const symptom = new SymptomModel({
      author: {
        uid: req.user?.uid,
        displayName: req.user?.name
      },
      symptom: symptomData
    });
    db.collection("symptoms").insertOne(symptom);
    res.json({ message: "Symptom Added Successfully" });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json("There was an error while adding symptom");
  }
});

//-------------DELETE Meal----------//

symptomsRouter.delete("/delete-symptom", async (req, res) => {
  const { docId } = req.query;

  if (!docId || typeof docId !== "string")
    return res.status(400).json("Unable To Proccess Request");

  try {
    const doc = await db
      .collection("symptoms")
      .findOne({ _id: new ObjectId(docId) });

    if (doc.author.uid !== req.user?.uid)
      return res.status(403).json("unauthorized request");

    await db.collection("symptoms").deleteOne(doc);

    return res.json({ message: "Symptom Deleted Successfully", docId: docId });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("There was an Error while deleting symptom");
  }
});

symptomsRouter.put("/edit-symptom", async (req, res) => {
  const {
    data: { symptom, docId }
  } = req.body;

  if (!docId || _.isEmpty(symptom))
    res.status(400).json("Unable To Proccess Request");

  try {
    symptom.date = helpers.stringToDate(symptom?.date);

    await db.collection("symptoms").updateOne(
      { _id: new ObjectId(docId), "author.uid": req.user.uid },
      {
        $set: {
          symptom: symptom
        }
      }
    );

    return res.json({
      message: "Symptom Updated Successfully",
      docId,
      symptom
    });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("There was an Error while updating symptom");
  }
});

export default symptomsRouter;
