import moment from 'moment'

export const getStartDayDate = (start: Date | string) => {
   return moment(start).startOf('day').toDate()
}

export const getEndDayDate = (end: Date | string) => {
   return moment(end).endOf('day').toDate()
}

export const stringToDate = (date: string) => {
   return moment(date).toDate()
}

export const formatDate = (date: Date | string) => {
   return moment(date).utc(true).format('DD/MM/YYYY')
}
