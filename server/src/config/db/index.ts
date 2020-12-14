import mongoose from 'mongoose'
import 'dotenv/config'

const uri = process.env.DB_URI as string

export const connectMongo = () => {
   mongoose.connect(
      uri,
      {
         useNewUrlParser: true,
         useUnifiedTopology: true
      },
      (err) => {
         if (err) {
            console.error(
               'Failed to connect to mongo on startup - retrying in 5 sec',
               err
            )
            setTimeout(connectMongo, 5000)
         }
      }
   )
}
