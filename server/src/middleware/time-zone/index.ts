import { Request, Response, NextFunction } from 'express'

export const timeZone = (req: Request, res: Response, next: NextFunction) => {
   const tz = req.headers['timezone']
   req.user.timezone = tz || 'UTC'
   return next()
}
