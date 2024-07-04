const { Airport } = require('../models/index');

class AirportRepository{
    async createAirport(data){
        try {
            console.log(data)
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async updateAirport(id, data){
        try {
            const airport = await Airport.findByPk(id);
            if(airport){
                console.log("Airport details",airport);
                Object.assign(airport, data);
                await airport.save();
            }
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async deleteAirport(id){
        try {
            const airport = await Airport.destroy({
                where:{
                    id: id
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async getAirport(id){
        try {
            const airport = await Airport.findByPk(id);
            return airport;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
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