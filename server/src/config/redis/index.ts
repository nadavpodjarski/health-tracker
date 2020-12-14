import redis from 'redis'

export const redisClient = redis.createClient({
   host: '127.0.0.1',
   port: 6379
})

redisClient.on('error', (err) => {
   console.log(err.stack)
})
