const express = require(`express`);
const router = express.Router()


router.get('/cars', async(req, res, next)=>{
    res.send("test")
})

module.exports = {
    router: router
}