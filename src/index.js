const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')

const {createCity, updateCity, getCity, deleteCity} = require('./controllers/index')

const serverSetup = async () => {
    
    // Express object
    const app = express()
    
    // Middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extrended : true}));
    
    app.get('/city/:id', getCity)
    app.post('/city', createCity)
    app.delete('/city/:id', deleteCity)
    app.patch('/city/:id', updateCity)
    // Server listening
    app.listen(PORT, () => {
        console.log(`Server is runnning at ${PORT}`);
    })
}

serverSetup()