const {createCity, updateCity, getCity, deleteCity, getAllCities, createMultipleCities, getCityAirports} = require('./city-controller.js')
const { createAirport, getAirport, updateAirport, deleteAirport, getMultipleAirports, createMultipleAirports } = require('./airport-controller.js')
module.exports = {
    createCity,
    updateCity,
    getCity,
    deleteCity,
    getAllCities,
    createMultipleCities,
    createAirport,
    getAirport,
    updateAirport,
    deleteAirport,
    getMultipleAirports,
    createMultipleAirports,
    getCityAirports
}