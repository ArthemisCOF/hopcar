const config = require('../config')
const sql = require('mssql')
const utils = require('./utils')

const getCarslist = async() => {
    try{
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries()
        const list = await pool.request().query(sqlQueries.carslist)
        return list.recordset
    } catch (error){
        throw error
    }
}

const getCarsDetail = async(carRegistration) => {
    try{
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries()
        const list = await pool.request().input('carRegistration', sql.VarChar, carRegistration).query(sqlQueries.cardetail)
        return list.recordset
    } catch (error){
        throw error
    }
}

const updateCardetail = async(carRegistration, carData) => {
    try{
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries()
        const update = await pool.request()
                                    .input('carRegistration', sql.VarChar, carRegistration)
                                    .input('brand', sql.VarChar, carData.brand)
                                    .input('model', sql.VarChar, carData.model)
                                    .input('remark', sql.VarChar, carData.remark)
                                    .input('color', sql.VarChar, carData.color)
                                    .input('year', sql.Int, carData.year)
                                    .query(sqlQueries.updatecar)

        return update.recordset
    } catch (error){
        throw error
    }
}

const createCardetail = async(carData) => {
    try{
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries()
        const create = await pool.request()
                                    .input('carRegistration', sql.VarChar, carData.carRegistration)
                                    .input('brand', sql.VarChar, carData.brand)
                                    .input('model', sql.VarChar, carData.model)
                                    .input('color', sql.VarChar, carData.color)
                                    .input('year', sql.Int, carData.year)
                                    .query(sqlQueries.createcar)

        return create.recordset
    } catch (error){
        throw error
    }
}

const deletedCardetail = async(carRegistration) => {
    try{
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries()
        const deleted = await pool.request()
                                    .input('carRegistration', sql.VarChar, carRegistration)
                                    .query(sqlQueries.deletecar)
                                


        return deleted.recordset
    } catch (error){
        throw error
    }
}


module.exports = {
    getCarslist,
    getCarsDetail,
    updateCardetail,
    createCardetail,
    deletedCardetail
}