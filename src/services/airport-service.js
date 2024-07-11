const { AirportRepository } = require('../repository/index')
const CrudService = require('./crud-service');
class AirportService extends CrudService{
    constructor(){
        super(new AirportRepository())
        this.airportRepo = new AirportRepository()
    }
    async createMultipleAirports(data) {
        try {
            const airport = await this.airportRepo.createMultipleAirports(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
    async getMultipleAirports() {
        try {
            const airport = await this.airportRepo.getMultipleAirports();
            return airport;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
}

module.exports = AirportService