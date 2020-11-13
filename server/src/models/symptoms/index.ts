import mongoose from "mongoose";

const { Schema } = mongoose;

const SymptomSchema = new Schema({
  author: {
    uid: String,
    displayName: String
  },
  symptom: Object,
  createdAt: { type: Date, default: Date.now() }
});

export const SymptomModel = mongoose.model("Symptom", SymptomSchema);
