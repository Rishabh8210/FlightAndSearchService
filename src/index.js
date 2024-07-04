const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')
const db = require('./models/index')
const {City, Airport} = require('./models/index')
const ApiRoutes = require('./routes/index')

const serverSetup = async () => {
    
    // Express object
    const app = express()
    
    // Middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extrended : true}));
    
    app.use('/api', ApiRoutes)

    // Server listening
    app.listen(PORT, async() => {
        console.log(`Server is runnning at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
    })
}

serverSetup()