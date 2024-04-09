const express = require(`express`);
const carsController = require('../controller/carsController')
const router = express.Router()



router.get('/cars', carsController.getCarslist)

module.exports = {
    router: router
}