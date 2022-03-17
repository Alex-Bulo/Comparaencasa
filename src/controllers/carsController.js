const db = require('../database/models');


let carsController = {
    
    getCar: async (req,res) => {
        const plate = req.params.id
        try {
            
            const carsInfo = await db.Cars.findOne({
                where: {carPlate: plate},
            })

            if (!carsInfo){
              throw new Error('Plate not found')
            }
            
            
            
            res.status(200).json({
                meta:{
                    status:"success",
                },
                data: carsInfo
                
                
            })
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                meta:{
                    status:'unsuccesful'
                },
                data: {carName:error.message, carPlate:plate, error:true}
            })            
        }    
        
    },
 
    getUser: async (req,res) => {
        const {id} = req.params
        try {            
            
            const userInfo = await db.Users.findOne({
                where: {id: id},
                include:[{
                    model:db.Cars, as:'car'}]
            })

            if (!userInfo){
              throw new Error('User not found')
            }
            
            delete userInfo['password']
            
            res.status(200).json({
                meta:{
                    status:"success",
                },
                data: userInfo
                
                
            })
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                meta:{
                    status:'unsuccesful'
                },
                data: error.message
            })            
        }    
        
    },

   
    

}

module.exports = carsController