const Success = require('../handlers/successHandler');
const taskService = require('../services/taskService');

module.exports.getAll = async () => {
    return await taskService.getAll();
}

module.exports.getOne = async (id) => {
    return await taskService.getOne(id)
}

module.exports.createOne = async (body) => {
    return await taskService.createOne(body);
}

module.exports.updateOne = async (id, body) => {
    return await taskService.updateOne(id, body);
}
module.exports.deleteOne = async (id) => {
    return await taskService.deleteOne(id); 
}