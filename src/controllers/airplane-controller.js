const { AirplaneService } = require('../services/index');

const airplaneService = new AirplaneService();

const createAirplane = async(req, res) => {
    try {
        const data = req.body;
        const airplane = await airplaneService.createAirplane(data);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: 'Successfully created an airplane record',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create an Airplane record",
            err: error
        })
    }
}

const updateAirplane = async(req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;  
        const airplane = await airplaneService.updateAirplane(id, data);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: 'Successfully updated an airplane record',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update an Airplaner record",
            err: error
        })
    }
}

const deleteAirplane = async(req, res) => {
    try {
        const id = req.params.id;
        const airplane = await airplaneService.deleteAirplane(id);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: 'Successfully deleted an airplane record',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete an Airplane record",
            err: error
        })
    }
}

const getAirplane = async(req, res) => {
    try {
        const id = req.params.id;
        const airplane = await airplaneService.getAirplane(id);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: 'Successfully fetched an airplane record',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch an Airplane record",
            err: error
        })
    }
}

const getMultipleAirplanes = async(req, res) => {
    try {
        const airplane = await airplaneService.getMultipleAirplanes();
        return res.status(200).json({
            data: airplane,
            success: true,
            message: 'Successfully fetched all airplane records',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch all Airplane records",
            err: error
        })
    }
}
const createMultipleAirplanes = async(req, res) => {
    try {
        const data = req.body;
        const airplane = await airplaneService.createMultipleAirplanes(data);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: 'Successfully created multiple airplanes record',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create multiple Airplanes records",
            err: error
        })
    }
}

module.exports = {
    createAirplane,
    updateAirplane,
    deleteAirplane,
    getAirplane,
    getMultipleAirplanes,
    createMultipleAirplanes
}