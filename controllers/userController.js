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
    try {
        const user = await userService.getOne(req.params.id);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(error.code).send({
            error: error.message
        });
    }
}

module.exports.createOne = async (req, res) => {
    try {
        const user = await userService.createOne(req.body);
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send({
            error: "Something went wrong"
        })
    }
}

module.exports.updateOne = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.updateOne(id, req.body);

        return res.status(201).send({
            message:`User with id ${id} updated successfully`
        });
    } catch (error) {
        return res.status(error.code).send({
            error: error.message
        })
    }
}

module.exports.deleteOne = async (req, res) => {
    try {
        await userService.deleteOne(req.params.id);

        return res.status(204).send()
    } catch (error) {
        return res.status(error.code).send({
            error: error.message
        })
    }
}