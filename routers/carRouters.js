const express = require(`express`);
const carsController = require('../controller/carsController');
const router = express.Router()



router.get('/cars', carsController.getCarslist)
router.get('/car/:carRegistration', carsController.getCarsDetail)
router.put('/car/:carRegistration', carsController.updateCars)
router.post('/car', carsController.createCars)
router.delete('/car/:carRegistration',carsController.deletedCars)

module.exports = {
    router: router
}