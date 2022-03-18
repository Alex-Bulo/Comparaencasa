const { validationResult } = require('express-validator')
const db = require('../database/models');

let usersController = {

    login: async (req, res) => {
        const formValidation = validationResult(req)
        
        //checks if there are errors from validation
        if (!formValidation.isEmpty()){
            return res.status(500).json({
                meta:{
                    status: 'unsuccesful'
                },
                data:formValidation.mapped()
            })
        }
        const mail= req.body.mail;
        
        //search in db for user info based on mail
        const user = await db.Users.findOne({
            where: {mail},
            attributes: ['id','name', 'mail', 'photo'],
            include:[{model:db.Cars, as:'car'}]
        });
        
        // req.session.logged = user;

        res.status(200).json({
            meta:{
                status:"success",
            },
            data: user
            
            
        });
    }

}

module.exports = usersController