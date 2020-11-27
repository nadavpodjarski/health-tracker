import moment from 'moment-timezone'

export const getStartDayDate = (start: Date | string, tz: string) => {
   return moment(start).tz(tz).startOf('day').toDate()
}

export const getEndDayDate = (end: Date | string, tz: string) => {
   return moment(end).tz(tz).endOf('day').toDate()
}

export const stringToDate = (date: string) => {
   return moment(date).toDate()
}

export const formatDate = (date: Date | string, tz: string) => {
   return moment(date).tz(tz).format('DD/MM/YYYY')
}
