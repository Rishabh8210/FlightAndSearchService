const {Op} = require('sequelize')
const { flight } =  require('../models/index');

class FlightRepository{

    #createFilter(data){
        let filter = {}
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId
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
        // console.log(filter)
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    
    async getFlight(flightId){
        try{
            const flight = await flight.findByPk(flightId);
            return flight;
        }catch(error){
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async getAllFlight(filter){
        try {
            const filterData = this.createFlight(filter);
            const flight = await flight.findAll({
                where: filterData
            })
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
}

module.exports = FlightRepository;