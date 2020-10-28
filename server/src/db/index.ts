import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.DB_URI as string;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
