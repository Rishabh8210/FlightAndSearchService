const { AirportService } = require('../services/index');
const {ServerErrorCodes, SuccessCodes} = require('../utils/error-code')
const airportService = new AirportService();

const createAirport = async(req, res) => {
    try {
        const data = req.body;
        const airport = await airportService.create(data);
        return res.status(SuccessCodes.CREATED).json({
            data: airport,
            success: true,
            message: "Airport created successfully",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: true,
            message: "Not able to create Airport",
            err: error
        })
    }
}

const updateAirport = async(req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const airport = await airportService.update(id, data);
        return res.status(SuccessCodes.OK).json({
            data: airport,
            success: true,
            message: "Airport Updated successfully",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: true,
            message: "Not able to update Airport",
            err: error
        })
    }
}

const deleteAirport = async(req, res) => {
    try {
        const id = req.params.id;
        const airport = await airportService.delete(id);
        return res.status(SuccessCodes.OK).json({
            data: airport,
            success: true,
            message:"Successfully deleted the record",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to delete the record",
            err: error
        })
    }
}

const getAirport = async(req, res) =>{
    try {
        const id = req.params.id;
        const airport = await airportService.get(id);
        return res.status(SuccessCodes.OK).json({
            data: airport,
            success: true,
            message: "Successfully fetched the Airport",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to fetch the record",
            err: error
        })
    }
}

const createMultipleAirports = async(req, res) =>{
    try {
        const data = req.body;
        const airport = await airportService.createMultipleAirports(data);
        return res.status(SuccessCodes.CREATED).json({
            data: airport,
            success: true,
            message: "Successfully Created Airports",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to create airports",
            err: error
        })
    }
}

const getMultipleAirports = async(req, res) =>{
    try {
        const airport = await airportService.getMultipleAirports();
        return res.status(SuccessCodes.OK).json({
            data: airport,
            success: true,
            message: "Successfully fetched all Airports",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to fetch the Airpot record",
            err: error
        })
    }
}

module.exports = {
    createAirport,
    deleteAirport,
    updateAirport,
    getAirport,
    getMultipleAirports,
    createMultipleAirports
}