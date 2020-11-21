import rateLimit from 'express-rate-limit'

export const apiRateLimiter = rateLimit({
   windowMs: 1000,
   max: 2
})
