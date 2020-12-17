import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import * as middleware from './middleware'
import compression from 'compression'

import { api } from './api'
import { homeAPI } from './packages/home/home.routes'

import { connectMongo } from './config'

import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from '../secrets/firebase-service-account.json'

const app = express()

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount as ServiceAccount)
})

connectMongo()

app.use(express.json())
app.use(cors())
app.use(compression())
app.use(helmet())

app.use(
   '/api',
   middleware.apiRateLimiter,
   middleware.firebaseAuth,
   middleware.timeZone,
   api
)

app.use('/', homeAPI)

const PORT = 8080
app.listen(PORT, () => {
   console.log(`listening on port ${PORT}`)
})
