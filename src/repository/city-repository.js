const { Op } = require('sequelize')
const { City } = require('../models/index');
const CrudRepository = require('./crud-repository')
class CityRepository extends CrudRepository{
    constructor(){
        super(City)
    }
    async getAllCities(filter){ // filter can be empty
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong at Repository layer");
            throw {error}
        }
    }
    async createMultipleCities(data) {
        try{
            const cities = await City.bulkCreate(data)
            return cities;
        }catch(error){
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async getCityAirports(id){
        try {
            const city = await City.findByPk(id);
            const airports = await city.getAirports();
            return airports;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error}
        }
    }
}

module.exports = CityRepository