const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config")
const carRouter = require("./routers/carRouters")




const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use('/api', carRouter.router)

app.listen(config.port, ()=> console.log("Server is listening on http://localhost:"+config.port))