const { CityService } = require('../services/index');

const cityService = new CityService()

const createCity = async (req, res) => {
    try {
        console.log(req.body);
        const city = await cityService.createCity(req.body)
        return res.status(201).json({
            data:city,
            success:true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Not able to create a city',
            err: error
        });
    }
}   

const updateCity = async (req, res) => {
    try {
        const id = req.params.id;
        const city = await cityService.updateCity(id,req.body)
        return res.status(201).json({
            data:city,
            success:true,
            message: 'Successfully updated a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
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
        const city = await cityService.getCity(id)
        return res.status(201).json({
            data:city,
            success:true,
            message: 'Successfully get a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
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
        const city = await cityService.deleteCity(id)
        return res.status(201).json({
            data:city,
            success:true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
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
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message: 'Not able to fetch all cities',
            err: error
        });
    }
}

module.exports = {
    createCity,
    updateCity,
    getCity,
    deleteCity,
    getAllCities
}