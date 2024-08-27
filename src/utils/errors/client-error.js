const { StatusCodes } = require('http-status-codes')
class ClientError extends Error {
    constructor(name, message, explanation, statusCode = StatusCodes.NOT_FOUND){
        super();
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = ClientError