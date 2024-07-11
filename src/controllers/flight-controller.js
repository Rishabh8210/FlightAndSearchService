const { FlightService } = require('../services/index');
const { ClientErrorCode, ServerErrorCodes, SuccessCodes} = require('../utils/error-code')
const flightService = new FlightService();
const createFlight = async (req, res) => {
    try{
        const data = req.body;
        const flight = await flightService.createFlight(data);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        })
    }catch(error){
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success: false,
            message: "Not able to create a flight",
            err: error
        })
    }
}

const getFlight = async(req, res) => {
    try {
        const {flightId} = req.params;
        const flight = await flightService.getFlight(flightId);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: "Successfully fetched the particular flight details",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight data',
            err: error
        })
    }
}

const getAllFlights = async(req, res) => {
    try {
        const data = req.query;
        const flights = await flightService.getAllFlight(data);
        return res.status(SuccessCodes.OK).json({
            data: flights,
            success: true,
            message: "Successfully got all the flights details",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able fetch all the flights data",
            err: error
        })
    }
};

module.exports = {
    createFlight,
    getAllFlights,
    getFlight
}