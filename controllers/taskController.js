const taskService = require('../services/taskService');

module.exports.getAll = async (req, res) => {
    try {
        const tasks = await taskService.getAll();
        return res.status(200).send(tasks);
    } catch (error) {
        return res.status(error.status).send({
            error: error.message
        })
    }
}

module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await taskService.getOne(id)
        return res.status(200).send(task);
    } catch (error) {
        return res.status(error.status).send({
            error: error.message
        })
    }
}

module.exports.createOne = async (req, res) => {
    try {
        const task = await taskService.createOne(req.body);
        return res.status(201).send(task);
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports.updateOne = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await taskService.updateOne(id, req.body);
        return res.status(200).send({
            message: "Task updated successfully",
            task
        });
    } catch (error) {
        return res.status(error.status).send({
            error: error.message
        })
    }
}
module.exports.deleteOne = async (req, res) => {
    const { id } = req.params;
    try {
        await taskService.deleteOne(id);
        return res.status(204).send({
            message: "Task deleted successfully"
        })
    } catch (error) {
        return res.status(error.status).send({
            error: error.message
        })
    }
}