const AppError = require('../errors/AppError');
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
        throw new AppError('User not found', 404);
    }
    return user;
}

module.exports.createOne = (body) => {
    return userRepository.postOne(body);
}

module.exports.updateOne = async (id, body) => {
    const user = await userRepository.updateOne(id, body);
    if (user[0] !== 1) {
        throw new AppError('User not found', 404);
    }
    return user;
}

module.exports.deleteOne = async (id) => {
    const user = await userRepository.deleteOne(id);
    if (user !== 1) {
        throw new AppError('User not found', 404);
    }
    return user;
}