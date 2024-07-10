const {createCity, updateCity, getCity, deleteCity, getAllCities, createMultipleCities, getCityAirports} = require('./city-controller.js')
const { createAirport, getAirport, updateAirport, deleteAirport, getMultipleAirports, createMultipleAirports } = require('./airport-controller.js')
const {createAirplane, getAirplane, updateAirplane, deleteAirplane, getMultipleAirplanes, createMultipleAirplanes} = require('./airplane-controller.js')
const {createFlight, getAllFlights, getFlight} = require('./flight-controller.js');
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
    getCityAirports,
    createAirplane,
    updateAirplane,
    deleteAirplane,
    getAirplane,
    getMultipleAirplanes,
    createMultipleAirplanes,
    createFlight,
    getAllFlights,
    getFlight
}