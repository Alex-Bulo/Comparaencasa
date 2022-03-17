const { body } = require('express-validator')
// const bcrypt = require('bcryptjs')
const db = require('../database/models')

const loginValidation = [
    body('mail')
    .notEmpty()
    .withMessage('Please, type in your email.')
    .bail()
    .isEmail()
    .withMessage('Please, write a valid email.')
    .bail(),
    body('pass')
    .notEmpty()
    .withMessage('Please, type in your password.')
    .bail()
    .custom( async (value, {req})=> {
        const {mail, pass} = req.body

        const userFound = await db.Users.findOne({
            where: {mail}
        })

        if (userFound){
            const passOK = pass === userFound.password
            // const passOK = bcrypt.compareSync(password, userFound.password)

            if (passOK){
                return true
            }

        }
        return Promise.reject ('Incorrect user or password.')
    })

]

module.exports = loginValidation