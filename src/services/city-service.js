const { CityRepository } = require('../repository/index');
class CityService {
    constructor(){
        this.cityRepo = new CityRepository();
    }
    async createCity(data){
        try {
            const result = this.cityRepo.createCity(data)
            return result;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async updateCity(cityid, data){
        try {
            const result = this.cityRepo.updateCity(cityid, data)
            return result;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async getCity(cityid){
        try {
            const result = this.cityRepo.getCity(cityid)
            return result;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async deleteCity(cityid){
        try {
            const result = this.cityRepo.deleteCity(cityid)
            return result;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
}

module.exports = CityService;