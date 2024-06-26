const carsRepo =require('../repository/cars')

const getCarslist = async(req, res) => {
    try{
        const cars = await carsRepo.getCarslist()
        res.send({ status: 200, data: cars })
    } catch(error){
        console.log('error', error)
        res.status(400).send({ status: 400, message: 'internal server error'})
    }
}

const getCarsDetail = async(req, res) => {
    try{
        const carRegistration = req.params.carRegistration
        const cars = await carsRepo.getCarsDetail(carRegistration)
        res.send({ status: 200, data: cars?.[0] || {} })
    } catch(error){
        console.log('error', error)
        res.status(400).send({ status: 400, message: 'internal server error'})
    }
}

const updateCars = async(req, res) => {
    try{
        const carRegistration = req.params.carRegistration
        const carData = req.body
        const cars = await carsRepo.updateCardetail(carRegistration, carData)
        res.send({ status: 200, data: cars?.[0] || {} })
    } catch(error){
        console.log('error', error)
        res.status(400).send({ status: 400, message: 'internal server error'})
    }
}

const createCars = async(req, res) => {
    try{
        const carData = req.body
        const cars = await carsRepo.createCardetail(carData)
        res.send({ status: 200, data: cars?.[0] || {} })
    } catch(error){
        console.log('error', error)
        res.status(400).send({ status: 400, message: 'internal server error'})
    }
}

const deletedCars = async(req, res) => {
    try{
        const carRegistration = req.params.carRegistration
        const cars = await carsRepo.deletedCardetail(carRegistration)
        res.send({ status: 200, data: cars?.[0] || {} })
    } catch(error){
        console.log('error', error)
        res.status(400).send({ status: 400, message: 'internal server error'})
    }
}


module.exports = {
    getCarslist,
    getCarsDetail,
    updateCars,
    createCars,
    deletedCars
    
}