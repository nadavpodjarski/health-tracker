import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'
import { middleware } from './middleware'

import { api } from './api'
import { connectMongo } from './db'

import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from '../secrets/firebase-service-account.json'

const app = express()

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount as ServiceAccount)
})

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use(middleware.apiRateLimiter)
app.use(middleware.firebaseAuth)
app.use(middleware.timeZone)

connectMongo()

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '/client/build')))
   api.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '/client/build.index.html'))
   })
} else {
   app.use('/api', api)
}

const PORT = 4000

app.listen(PORT, () => {
   console.log(`listening on port ${PORT}`)
})
