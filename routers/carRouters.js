const express = require(`express`);
const carsController = require('../controller/carsController')
const router = express.Router()



router.get('/cars', carsController.getCarslist)
router.get('/car/:carRegistration', carsController.getCarsDetail)

module.exports = {
    router: router
}