const {Op} = require('sequelize')
const { flight } =  require('../models/index');
const CrudRepository = require('./crud-repository')
class FlightRepository extends CrudRepository{
    constructor(){
        super(flight)
    }
    #createFilter(data){
        let filter = {}
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId
        }
        if(data.flightNumber){
            filter.flightNumber = data.flightNumber
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId
        }

        let PriceFilter = [];
        if(data.minPrice){
            PriceFilter.push({price: {[Op.lte]: minPrice}})
            // Object.assign(filter, {price: {[Op.gte]: data.minPrice}})
        }

        if(data.maxPrice){
            PriceFilter.push({price: {[Op.lte]: data.maxPrice}})
            // Object.assign(filter, {price: {[Op.lte]: maxPrice}});
        }

        Object.assign(filter, {[Op.and]: PriceFilter});

        // Object.assign(filter, {
        //     [Op.and]: [
        //         {price: {[Op.gte]: 3000}}, 
        //         {price: {[Op.lte]: 7000}}
        //     ]
        // })
        console.log(filter)
        return filter;
    }

    async createFlight(data){
        try {
            const result = await flight.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    
    async getFlight(id){
        try{
            const result = await flight.findByPk(id);
            return result;
        }catch(error){
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async getAllFlight(filter){
        try {
            const filterData = this.#createFilter(filter);
            const results = await flight.findAll({
                where: filterData
            })
            return results;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
}

module.exports = FlightRepository;