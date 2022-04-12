const userService = require('../services/userService');

module.exports.getAll = async (data) => {
    const users = await userService.getAll();
    return users;
}

module.exports.getOne = async (id) => {
    return await userService.getOne(id);
}

module.exports.createOne = async (body) => {
   return await await userService.createOne(body);
}

module.exports.updateOne = async (id, body) => {
    return await userService.updateOne(id, body);
}

module.exports.deleteOne = async (id) => {
    return await userService.deleteOne(id);
}