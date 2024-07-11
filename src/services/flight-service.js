const { FlightRepository, AirplaneRepository } = require('../repository/index')
const CrudRepository = require('./crud-service')
const {compareTime} = require('../utils/helper')
class FlightService extends CrudRepository{
    constructor(){
        super(new FlightRepository())
        this.flightRepo = new FlightRepository()
        this.airplaneRepo = new AirplaneRepository()
    }

    // flightNumber
    // airplaneId
    // departureAirportId
    // arrivalAirportId
    // departureTime
    // arrivalTime
    // Price
    // totalSeats -> airplane
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepo.get(data.airplaneId);
            const flight = await this.flightRepo.create({...data, totalSeats: airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error}
        }
    }

    async getFlight(id){
        try{
            const flight = await this.flightRepo.get(id);
            return flight;
        }catch(error){
            console.log("Something went worng inside the Service layer");
            throw {error}
        }
    }

    async getAllFlight(data){
        try {
            const flights = await this.flightRepo.getAllFlight(data);
            return flights 
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
}

module.exports = FlightService