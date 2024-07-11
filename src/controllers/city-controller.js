const { CityService } = require('../services/index');
const {ServerErrorCodes, SuccessCodes} = require('../utils/error-code')
const cityService = new CityService()

const createCity = async (req, res) => {
    try {
        console.log(req.body);
        const city = await cityService.create(req.body)
        return res.status(SuccessCodes.CREATED).json({
            data:city,
            success:true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message: 'Not able to create a city',
            err: error
        });
    }
}   

const updateCity = async (req, res) => {
    try {
        const {id} = req.params.id;
        const city = await cityService.update(id,req.body)
        return res.status(SuccessCodes.OK).json({
            data:city,
            success:true,
            message: 'Successfully updated a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message: 'Not able to update a city',
            err: error
        });
    }
}   

const getCity = async (req, res) => {
    try {
        const id = req.params.id;
        const city = await cityService.get(id)
        return res.status(SuccessCodes.OK).json({
            data:city,
            success:true,
            message: 'Successfully get a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message: 'Not able to get a city',
            err: error
        });
    }
}   

const deleteCity = async (req, res) => {
    try {
        const id = req.params.id;
        const city = await cityService.delete(id)
        return res.status(SuccessCodes.OK).json({
            data:city,
            success:true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message: 'Not able to delete a city',
            err: error
        });
    }
}   

const getAllCities = async(req, res) => {
    try {
        const {name} = req.query;
        const cities = await cityService.getAllCities({name});
        return res.status(SuccessCodes.OK).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message: 'Not able to fetch all cities',
            err: error
        });
    }
}

const createMultipleCities = async (req, res) => {
    try{
        const data = req.body
        const cities = await cityService.createMultipleCities(data);
        return res.status(SuccessCodes.OK).json({
            data: cities,
            success: true,
            message: 'Successfully created multiple cities',
            err: {}
        })
    }catch(error){
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success: false,
            message: 'Not able to create cities',
            err: error
        })
    }
}
const getCityAirports = async(req, res) => {
    try {
        const id = req.params.id;
        const airports = await cityService.getCityAirports(id);
        return res.status(SuccessCodes.OK).json({
            data: airports,
            success: true,
            message: "Successfully fetched the respected airports of a city",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to fetch respected airports of a citty",
            err: error
        })
    }
}

module.exports = {
    createCity,
    updateCity,
    getCity,
    deleteCity,
    getAllCities,
    createMultipleCities,
    getCityAirports
}