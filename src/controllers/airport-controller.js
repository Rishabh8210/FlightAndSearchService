const { AirportService } = require('../services/index');

const airportService = new AirportService();

const createAirport = async(req, res) => {
    try {
        const data = req.body;
        const airport = await airportService.createAirport(data);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Airport created successfully",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
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
        const airport = await airportService.updateAirport(id, data);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Airport Updated successfully",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
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
        const airport = await airportService.deleteAirport(id);
        return res.status(200).json({
            data: airport,
            success: true,
            message:"Successfully deleted the record",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
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
        const airport = await airportService.getAirport(id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully fetched the city",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the record",
            err: error
        })
    }
}

const createMultipleAirports = async(req, res) =>{
    try {
        const data = req.body;
        const airport = await airportService.createMultipleAirports(data);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully fetched the city",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the record",
            err: error
        })
    }
}

const getMultipleAirports = async(req, res) =>{
    try {
        const airport = await airportService.getMultipleAirports();
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully fetched the city",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the record",
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