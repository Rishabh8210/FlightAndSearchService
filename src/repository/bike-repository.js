const { CrudRepository } = require('./index')
const { Airplane } = require('../models/index')
class BikeRepository extends CrudRepository{
    constructor(){
        super(Airplane)
    }
}

module.exports = BikeRepository