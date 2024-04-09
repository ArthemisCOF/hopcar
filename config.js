const dotenv = require('dotenv');
const assert = require('assert');
const path = require('path');

dotenv.config({path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`)});

const {PORT, HOST} = process.env;

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is require');


module.exports = {
    port: PORT,
    host: HOST
}