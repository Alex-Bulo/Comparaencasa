const express = require('express');
const carsController = require('../controllers/carsController');

const apiRouter = express.Router();


apiRouter.get('/cars/:id', carsController.getCar)

apiRouter.get('/users/:id', carsController.getUser)

module.exports = apiRouter;
