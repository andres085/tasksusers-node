const userService = require('../services/userService');

module.exports.getAll = async (req, res) => {
    try {
        const users = await userService.getAll();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(error.status).send({
            error: error.message
        })
    }
}

module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.getOne(id);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(error.status).send({
            error: error
        });
    }
}

module.exports.createOne = async (req, res) => {
    try {
        const user = await userService.createOne(req.body);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(error.status).send({
            error: error
        })
    }
}

module.exports.updateOne = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await userService.updateOne(id, req.body);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(error.status).send({
            error: error
        })
    }
}

module.exports.deleteOne = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await userService.deleteOne(id);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(error.status).send({
            error: error
        })
    }
}