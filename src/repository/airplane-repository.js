const { Airplane } = require('../models/index')
const CrudRepository = require('./crud-repository')
class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane)
    }
    async getMultipleAirplanes(){
        try {
            const airplanes = await Airplane.findAll();
            return airplanes;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async createMultipleAirplanes(data){
        try {
            const airplanes = await Airplane.bulkCreate(data);
            return airplanes;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
}

module.exports = AirplaneRepository;