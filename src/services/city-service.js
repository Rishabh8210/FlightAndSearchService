const { CityRepository } = require('../repository/index');
class CityService {
    constructor(){
        this.cityRepo = new CityRepository();
    }
    async createCity(data){
        try {
            const response = this.cityRepo.createCity(data)
            return response;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async updateCity(cityid, data){
        try {
            const response = this.cityRepo.updateCity(cityid, data)
            return response;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async getCity(cityid){
        try {
            const response = this.cityRepo.getCity(cityid)
            return response;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async deleteCity(cityid){
        try {
            const response = this.cityRepo.deleteCity(cityid)
            return response;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async getAllCities(){
        try {
            const cities = this.cityRepo.getAllCities();
            return cities;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error};
        }
    }
}

module.exports = CityService;