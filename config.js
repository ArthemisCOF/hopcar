const dotenv = require('dotenv');
const assert = require('assert');
const path = require('path');

dotenv.config({path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`)});

const {PORT, HOST, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is require');


module.exports = {
    port: PORT,
    host: HOST,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            encrypt: false,
            enableArithAbort: true
        }
    }
}