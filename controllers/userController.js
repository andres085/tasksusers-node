const userService = require('../services/userService');

module.exports.getAll = async (req, res) => {
    try {
        const users = await userService.getAll();

        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({
            error: "Couldn't find any users"
        })
    }
}

module.exports.getOne = async (req, res) => {
    try {
        const user = await userService.getOne(req.params.id);

        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({
            error: "Couldn't find any user"
        });
    }
}

module.exports.createOne = async (req, res) => {
    try {
        const user = await userService.createOne(req.body);

        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send({
            error: "Couldn't create a user"
        })
    }
}

module.exports.updateOne = async (req, res) => {
    try {
        const user = await userService.updateOne(req.params.id, req.body);

        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send({
            error: "Couldn't update a user"
        })
    }
}

module.exports.deleteOne = async (req, res) => {
    try {
        await userService.deleteOne(req.params.id);

        return res.status(200).send({
            message: "User Deleted"
        })
    } catch (error) {
        return res.status(500).send({
            error: "Couldn't delete a user"
        })
    }
}