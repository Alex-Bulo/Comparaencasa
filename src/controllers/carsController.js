const db = require('../database/models');
const { Op } = require('sequelize');


let carsController = {
    
    getCar: async (req,res) => {
        const plate = req.params.id
        try {
            
            const needForPlate = plate ? {carPlate: { [Op.eq]: plate }} : {}
            
            
            const carsInfo = await db.Cars.findOne({
                where: needForPlate,
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

}

module.exports = carsController