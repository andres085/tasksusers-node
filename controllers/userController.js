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