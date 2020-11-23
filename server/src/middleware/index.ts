import { firebaseAuth } from './firebase-auth'
import { apiRateLimiter } from './rate-limit'
import { timeZone } from './time-zone'

export const middleware = { apiRateLimiter, firebaseAuth, timeZone }
