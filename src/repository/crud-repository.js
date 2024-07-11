const { where } = require("sequelize/lib/sequelize");

class CrudRepository{
    constructor(model){
        this.model = model
    }
    
    async create(data){
        try {
            const result = await this.model.create(data);
            return result
        } catch (error) {
            console.log("Simething went wrong inside Repository layer");
            throw {error}
        }
    }
    async update(data, id){
        try {
            const result = await this.model.findByPk(id);
            Object.assign(result, data);
            await result.save();
            return result
        } catch (error) {
            console.log("Simething went wrong inside Repository layer");
            throw {error}
        }
    }

    async delete(id){
        try {
            const result = await this.model.destroy({
                where: {
                    id: id
                }
            });
            return true
        } catch (error) {
            console.log("Simething went wrong inside Repository layer");
            throw {error}
        }
    }

    async get(id){
        try {
            const result = await this.model.findByPk(id);
            return result
        } catch (error) {
            console.log("Simething went wrong inside Repository layer");
            throw {error}
        }
    }

    async getAll(filter){
        try {
            const result = await this.model.create(filter);
            return result
        } catch (error) {
            console.log("Simething went wrong inside Repository layer");
            throw {error}
        }
    }
}

module.exports = CrudRepository