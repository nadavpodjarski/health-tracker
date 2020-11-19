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

interface ISymptom extends mongoose.Document {
  author: {
    uid: string;
    displayName: string;
  };
  symptom: Object;
  createdAt: Date;
  verifyOwnership(uid: string): boolean;
}

interface ISymptomModel extends mongoose.Model<ISymptom> {
  verifyOwnership: (uid: string) => boolean;
}

SymptomSchema.methods.verifyOwnership = function (uid: string) {
  return this.author.uid === uid;
};

export const Symptom: ISymptomModel = mongoose.model<ISymptom, ISymptomModel>(
  "Symptom",
  SymptomSchema,
  "symptom"
);
