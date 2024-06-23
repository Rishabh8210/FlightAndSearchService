const express = require('express')

const serverSetup = async () => {
    const app = express()
    const PORT = 3000
    app.listen(PORT, () => {
        console.log(`Server is runnning at ${PORT}`);
    })
}

serverSetup()