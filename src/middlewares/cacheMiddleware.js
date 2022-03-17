const {getCache} = require('../cache/redisCache')


module.exports = (req, res, next)=>{

    const plate = req.params.plate;
    
    const onCache = getCache(plate)

    if(onCache){
        next()
    }else{
        
        res.status(200).json({
            meta:{
                status:"success",
            },
            data: onCache
            
            
        })
    }
}