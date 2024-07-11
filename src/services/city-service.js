const { CityRepository } = require('../repository/index');
const CrudService = require('./crud-service');
class CityService extends CrudService{
    constructor(){
        super(new CityRepository())
        this.cityRepo = new CityRepository();
    }
    
    async getAllCities(filter){
        try {
            const cities = await this.cityRepo.getAllCities(filter);
            return cities;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error};
        }
    }
    async createMultipleCities(data){
        try{
            const cities = await this.cityRepo.createMultipleCities(data);
            return cities;
        }catch(error){
            console.log("Something went wrong in Service layer");
            throw {error};
        }
    }
    async getCityAirports(id){
        try {
            const airports = await this.cityRepo.getCityAirports(id);
            return airports;
        } catch (error) {
            console.log("Something went wrong in the Service layer");
            throw {error}
        }
    }
}

module.exports = CityService;