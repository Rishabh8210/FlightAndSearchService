const { AirplaneRepository } = require('../repository/index');
const CrudService = require('./crud-service');
class AirplaneService extends CrudService{
    constructor(){
        super(new AirplaneRepository());
        this.airplaneRepo = new AirplaneRepository();
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