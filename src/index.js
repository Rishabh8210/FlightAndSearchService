const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')

const serverSetup = async () => {
    
    // Express object
    const app = express()
    
    // Middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extrended : true}));
    
    // Server listening
    app.listen(PORT, () => {
        console.log(`Server is runnning at ${PORT}`);
    })
}

serverSetup()