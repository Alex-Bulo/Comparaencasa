const { validationResult } = require('express-validator')
// const bcrypt = require('bcryptjs');
const db = require('../database/models');

let usersController = {

    // createNewUser: async (req, res)=>{
    //     let photo = '/images/pp/default.png';
    
    //     const formValidation = validationResult(req)
    
    //     const valuesFromUser = req.body
    
    //     const { file } = req;

    //     if(file){
    //         photo = '/images/pp/' + file.filename;
    //     }

    //     if (!formValidation.isEmpty()){
    //         photoPath = path.join(__dirname,'../../public', photo)

    //         file ? fs.unlinkSync(photoPath) : ''

    //         return res.render('users/register', {valuesFromUser, errors: formValidation.mapped()})
    //     }
        
    //     const {name, lastName, phoneNumber, email, password} = req.body;
    //     const hashPassword = bcrypt.hashSync(password)
        
    //     const newUser = {
    //         name, 
    //         lastName, 
    //         phoneNumber, 
    //         email, 
    //         password: hashPassword,
    //         photo,
    //         idCategory : 2
    //     }
               
    //     const user = await User.create({ ...newUser })
        
    //     delete user ['password']
        
    //     req.session.logged = user;
        
    //     res.redirect('/');
    // },

    login: async (req, res) => {
        const formValidation = validationResult(req)
        const valuesFromUser = req.body;

        if (!formValidation.isEmpty()){
            return res.status(500).json({
                meta:{
                    status: 'unsuccesful'
                },
                data:formValidation.mapped()
            })
        }
        const mail= req.body.mail;
        
        //busca en base de datos el user con dicho mail
        const user = await db.Users.findOne({
            where: {mail},
            attributes: ['id', 'mail', 'photo', 'idCar']
        });
        
        // req.session.logged = user;

        res.status(200).json({
            meta:{
                status:"success",
            },
            data: user
            
            
        });
    },

    
    // logout(req, res){
        
    //     req.session.destroy();
    //     res.clearCookie('user');
    //     res.redirect('/');

    // },

}

module.exports = usersController