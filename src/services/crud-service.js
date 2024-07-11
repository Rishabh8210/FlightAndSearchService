class CrudService{
    constructor(repositoryService){
        this.crudService = repositoryService;
    }
    async create(data){
        try {
            const service = await this.crudService.create(data);
            return service;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
    async delete(id){
        try {
            const service = await this.crudService.delete(id);
            return service;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
    async update(data, id){
        try {
            const service = await this.crudService.update(data, id);
            return service;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
    async get(id){
        try {
            const service = await this.crudService.get(id);
            return service;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
    async getAll(filter){
        try {
            const service = await this.crudService.getAll(filter);
            return service;
        } catch (error) {
            console.log("Something went wrong in the Service layer")
            throw {error}
        }
    }
}


module.exports = CrudService;