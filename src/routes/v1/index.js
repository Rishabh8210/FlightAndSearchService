const express = require('express')
const router = express.Router()

const { createCity, updateCity, getCity, deleteCity, getAllCities, createMultipleCities, createAirport, getAirport, updateAirport, deleteAirport, createMultipleAirports, getMultipleAirports, getCityAirports } = require('../../controllers/index');

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
module.exports = router