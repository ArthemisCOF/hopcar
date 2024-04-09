const dotenv = require('dotenv');
const assert = require('assert');
const path = require('path');

dotenv.config({path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`)});

const {PORT, HOST, SQL_USER, SQL_PASSWORD, SQL_DATABASE} = process.env;

const sqlEncrypt = process.env.ENCRYPT

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is require');


module.exports = {
    port: PORT,
    host: HOST,
    sql: {
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        option: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    }
}