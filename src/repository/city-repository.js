const { Op } = require('Sequelize')
const { City } = require('../models/index');

class CityRepository {
    async createCity ({ name }) {
        try{
            console.log({name})
            const city = await City.create({ name });
            return city;
        }catch(error){
            console.log("Something went wrong in Repository layer");
            throw { error };
        }
    }
    
    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw { error };
        }
    }
    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId)
            return city;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async updateCity(cityId, data){
        try {
            const city = await City.findByPk(cityId);
            if(city){
                city.name = data.name;
                await city.save()
            }
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
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