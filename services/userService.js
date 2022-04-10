const bcrypt = require('bcrypt');
const AppError = require('../errors/AppError');
const userRepository = require('../repositories/userRepository');
const createToken = require('../utils/createToken');

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

module.exports.userLogin = async (email, password) => {
    const user = await userRepository.getByEmail(email);
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
        throw new AppError('User not found', 404);
    }
    const token = createToken(user);
    console.log(token);
    return token;
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