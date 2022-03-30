const userRepository = require('../repositories/userRepository');

module.exports.getAll = () => {
    return userRepository.getAll();
}

module.exports.getOne = (id) => {
    return userRepository.getOne(id);
}

module.exports.createOne = (body) => {
    return userRepository.postOne(body);
}

module.exports.updateOne = (id, body) => {
    return userRepository.updateOne(id, body);
}

module.exports.deleteOne = id => {
    return userRepository.deleteOne(id);
}