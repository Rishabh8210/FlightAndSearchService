const { AirportRepository } = require('../repository/index')
class AirportService{
    constructor(){
        this.airportRepo = new AirportRepository()
    }
    async createAirport(data) {
        try {
            const airport = await this.airportRepo.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
    async updateAirport(id, data) {
        try {
            const airport = await this.airportRepo.updateAirport(id, data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
    async deleteAirport(id) {
        try {
            const airport = await this.airportRepo.deleteAirport(id);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
    async getAirport(id) {
        try {
            const airport = await this.airportRepo.getAirport(id);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
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