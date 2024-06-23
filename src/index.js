const express = require('express')
const { PORT } = require('./config/serverConfig')
const serverSetup = async () => {
    const app = express()
    app.listen(PORT, () => {
        console.log(`Server is runnning at ${PORT}`);
    })
}

serverSetup()