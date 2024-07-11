const { CrudService } = require('./index');
const { BikeRepository } = require('../repository/index')
class BikeService extends CrudService{
    constructor(){
        const service  = new BikeRepository()
        super(service)
    }
}

module.exports = BikeService