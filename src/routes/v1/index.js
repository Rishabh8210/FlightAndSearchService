const express = require('express')
const router = express.Router()

const { createCity, updateCity, getCity, deleteCity, getAllCities, createMultipleCities } = require('../../controllers/index');

router.post('/city', createCity);
router.get('/city/:id', getCity);
router.patch('/city/:id', updateCity);
router.delete('/city/:id', deleteCity);
router.get('/city', getAllCities);
router.post('/cities', createMultipleCities);
module.exports = router