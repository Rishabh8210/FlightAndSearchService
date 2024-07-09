const { flight } =  require('../models/index');

class FlightRepository{
    async createFlight(data){
        try {
            const fli = await flight.create(data);
            return fli;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
}

module.exports = FlightRepository;