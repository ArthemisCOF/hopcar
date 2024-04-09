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




module.exports = {
    getCarslist,
    getCarsDetail,
}