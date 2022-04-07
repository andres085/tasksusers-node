const AppError = require('../errors/AppError');
const taskRepository = require('../repositories/taskRepository');

module.exports.getAll = async () => {
    const tasks = await taskRepository.getAll();
    if (tasks.length <= 0) {
        throw new AppError('Task not found', 404);
    }
    return tasks;
}

module.exports.getOne = async (id) => {
    const task = await taskRepository.getOne(id);
    if (!task) {
        throw new AppError('Task not found', 404);
    }
    return task;
}

module.exports.createOne = (body) => {
    return taskRepository.createOne(body);
}

module.exports.updateOne = async(id, body) => {
    const task = await taskRepository.getOne(id);
    if (!task) {
        throw new AppError('Task not found', 404);
    }
    return taskRepository.updateOne(id, body);
}

module.exports.deleteOne = async (id) => {
    const task = await taskRepository.getOne(id);
    if (!task) {
        throw new AppError('Task not found', 404);
    }
    return taskRepository.deleteOne(id);
}