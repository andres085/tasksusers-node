const userRepository = require('../repositories/userRepository');

module.exports.getAll = async () => {
    const users = await userRepository.getAll();
    if (users.length <= 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Users not found";
        throw error;
    }
    return users;
}

module.exports.getOne = async(id) => {
    const user = await userRepository.getOne(id);
    if (!user) {
        const error = new Error();
        error.status = 404;
        error.message = "User not found";
        throw error;
    }
    return user;
}

module.exports.createOne = (body) => {
    return userRepository.postOne(body);
}

module.exports.updateOne = async (id, body) => {
    const user = await userRepository.getOne(id);
    if (!user) {
        const error = new Error();
        error.status = 404;
        error.message = "User not found";
        throw error;
    }
    return userRepository.updateOne(id, body);
}

module.exports.deleteOne = async (id) => {
    const user = await userRepository.getOne(id);
    if (!user) {
        const error = new Error();
        error.status = 404;
        error.message = "User not found";
        throw error;
    }
    return userRepository.deleteOne(id);
}