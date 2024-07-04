const { AirplaneRepository } = require('../repository/index')
class AirplaneService{
    constructor(){
        this.airplaneRepo = new AirplaneRepository();
    }
    async createAirplane(data){
        try {
            const airplane = await this.airplaneRepo.createAirplane(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async deleteAirplane(id){
        try {
            const airplane = await this.airplaneRepo.deleteAirplane(id)
            return true;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async updateAirplane(id, data){
        try {
            const airplane = await this.airplaneRepo.updateAirplane(id, data);
            return true;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async getAirplane(id){
        try {
            const airplane = await this.airplaneRepo.getAirplane(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async getMultipleAirplanes(){
        try {
            const airplanes = await this.airplaneRepo.getMultipleAirplanes();
            return airplanes;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
    async createMultipleAirplanes(data){
        try {
            const airplanes = await this.airplaneRepo.createMultipleAirplanes(data);
            return airplanes;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }
}

module.exports = AirplaneService;