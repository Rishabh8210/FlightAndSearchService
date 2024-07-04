const { Airplane } = require('../models/index');

class AirplaneRepository{
    async createAirplane(data){
        try {
            const airplane = await Airplane.create(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async deleteAirplane(id){
        try {
            const airplane = await Airplane.destroy({
                where: {
                    id: id
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async updateAirplane(id, data){
        try {
            const airplane = await Airplane.findByPk(id);
            if(airplane){
                Object.assign(airplane, data);
                await airplane.save();
                return true;
            }
            return false;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
    }
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in Repository layer");
            throw {error}
        }
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