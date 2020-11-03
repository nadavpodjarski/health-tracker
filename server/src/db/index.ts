import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.DB_URI as string;

const connect = () => {
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (err) => {
      if (err) {
        console.error(
          "Failed to connect to mongo on startup - retrying in 5 sec",
          err
        );
        setTimeout(connect, 5000);
      }
    }
  );
};

connect();

export const db = mongoose.connection.on("error", (err) => {
  console.log(err);
});
