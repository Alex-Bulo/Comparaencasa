const express = require('express');
const carsController = require('../controllers/carsController');
const usersController = require('../controllers/usersController');
const loginValidation = require('../middlewares/loginValidation');

const apiRouter = express.Router();


apiRouter.get('/cars/:id', carsController.getCar)

apiRouter.get('/users/:id', carsController.getUser)
apiRouter.post('/login', loginValidation, usersController.login)


module.exports = apiRouter;
