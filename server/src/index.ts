import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import * as middleware from './middleware'
import compression from 'compression'
import { api } from './api'
import { connectMongo, redisClient } from './config'
import path from 'path'

import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from '../secrets/firebase-service-account.json'

const app = express()

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount as ServiceAccount)
})

connectMongo()

app.use(express.static(path.resolve(__dirname, '../public')))

app.use(express.json())
app.use(cors())
app.use(compression())
app.use(helmet())

if (process.env.NODE_ENV === 'production') {
   app.use('*', (req, res, next) => {
      res.send(path.resolve(__dirname, '../public/index.html'))
   })
}

app.use(
   '/api',
   middleware.apiRateLimiter,
   middleware.firebaseAuth,
   middleware.timeZone,
   api
)

const PORT = 8080

app.listen(PORT, () => {
   console.log(`listening on port ${PORT}`)
})
