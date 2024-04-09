const config = require('../config')
const sql = require('mssql')
const utils = require('./utils')

const getCarslist =async(req, res) => {
    try{
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries()
        const list = await pool.query(sqlQueries.carslist)
        return list.recordset
    } catch (error){
        throw error
    }
}

module.exports = {
    getCarslist
}