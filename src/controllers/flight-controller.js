const { FlightService } = require('../services/index');

const {StatusCodes} = require('http-status-codes')
const flightService = new FlightService();
const createFlight = async (req, res) => {
    try{
        const data = req.body;
        const flight = await flightService.create(data);
        return res.status(StatusCodes.CREATED).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        })
    }catch(error){
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success: false,
            message: "Not able to create a flight",
            err: error
        })
    }
}

const updateFlight = async(req, res) => {
    try {
        const flightId = req.params.id;
        const data = req.body;
        const response = await flightService.updateFlight(flightId, data);
        return res.status(StatusCodes.OK).json({
            data: response,
            message: 'Successfully updated the flight',
            status: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            message: 'Not able to update the flight',
            status: false,
            err: error
        })
    }
}

const getFlight = async(req, res) => {
    try {
        const {id} = req.params;
        console.log(id)
        const flight = await flightService.getFlight(id);
        return res.status(StatusCodes.OK).json({
            data: flight,
            success: true,
            message: "Successfully fetched the particular flight details",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
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
        return res.status(StatusCodes.OK).json({
            data: flights,
            success: true,
            message: "Successfully got all the flights details",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
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
    getFlight,
    updateFlight
}