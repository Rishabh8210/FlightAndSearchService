const { Airport } = require('../models/index');
const CrudRepository = require('./crud-repository')
class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport)
    }
    async createMultipleAirports(data){
        try {
            const airports = await Airport.bulkCreate(data);
            return airports;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async getMultipleAirports(){
        try {
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
}
module.exports = AirportRepository