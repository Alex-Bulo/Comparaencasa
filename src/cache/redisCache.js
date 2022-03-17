const {createClient} = require('redis')
const redisClient = createClient();
const expTime = 5 * 60

const connectRedis = async ()=>{
    
    
    redisClient.on('error', (err) => console.log('Redis Client Error', err));
    
    await redisClient.connect();
    
    return redisClient

}

const setCache = async(plate,car) => {
    
    // const client = await connectRedis()
    
    
    await redisClient.setex(plate, expTime, car);
    const value = await client.get('key');
    
    return value
}

const getCache = async(plate) => {
        
    const value = await redisClient.get(plate);
    
    return value
}



module.exports.connectRedis = connectRedis
module.exports.setCache = setCache
module.exports.getCache = getCache