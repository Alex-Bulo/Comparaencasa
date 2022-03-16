const express = require('express');
const carsController = require('../controllers/carsController');

const apiRouter = express.Router();


apiRouter.get('/cars/:id', carsController.getCar)

module.exports = apiRouter;
