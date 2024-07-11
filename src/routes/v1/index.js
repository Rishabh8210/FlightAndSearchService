const express = require('express')
const router = express.Router()
const { validateCreateFlight } = require('../../middlewares/index')

const { createCity, updateCity, getCity, deleteCity, getAllCities, createMultipleCities, createAirport, getAirport, updateAirport, deleteAirport, createMultipleAirports, getMultipleAirports, getCityAirports, createAirplane, updateAirplane, deleteAirplane, getAirplane, getMultipleAirplanes, createMultipleAirplanes, createFlight, getAllFlights, getFlight} = require('../../controllers/index');

// Routes for City CRUD
router.get('/city/:id', getCity);
router.get('/city', getAllCities);
router.post('/city', createCity);
router.post('/cities', createMultipleCities);
router.patch('/city/:id', updateCity);
router.delete('/city/:id', deleteCity);
router.get('/city/airport/:id', getCityAirports);

// Routes for Airport CRUD
router.post('/airport', createAirport);
router.get('/airport/:id', getAirport);
router.patch('/airport/:id', updateAirport);
router.delete('/airport/:id', deleteAirport);
router.get('/airports', getMultipleAirports);
router.post('/airports', createMultipleAirports);

// Routes for Airplane CRUD
router.post('/airplane', createAirplane);
router.get('/airplane/:id', getAirplane);
router.patch('/airplane/:id', updateAirplane);
router.delete('/airplane/:id', deleteAirplane);
router.get('/airplanes', getMultipleAirplanes);
router.post('/airplanes', createMultipleAirplanes);

// Routes for Flight CRUD
router.post('/flights', validateCreateFlight, createFlight)
router.get('/flights', getAllFlights);
router.get('/flight', getFlight);
module.exports = router