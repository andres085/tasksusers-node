const taskRepository = require('../repositories/taskRepository');

module.exports.getAll = async () => {
    const tasks = await taskRepository.getAll();
    if (tasks.length <= 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Tasks not found";
        throw error;
    }
    return tasks;
}

module.exports.getOne = async (id) => {
    const task = await taskRepository.getOne(id);
    if (!task) {
        const error = new Error();
        error.status = 404;
        error.message = 'Task not found';
        throw error;
    }
    return task;
}

module.exports.createOne = (body) => {
    return taskRepository.createOne(body);
}

module.exports.updateOne = async(id, body) => {
    const task = await taskRepository.getOne(id);
    if (!task) {
        const error = new Error();
        error.status = 404;
        error.message = "Task not found";
        throw error;
    }
    return taskRepository.updateOne(id, body);
}

module.exports.deleteOne = async (id) => {
    const task = await taskRepository.getOne(id);
    if (!task) {
        const error = new Error();
        error.status = 404;
        error.message = "Task not found";
        throw error;
    }
    return taskRepository.deleteOne(id);
}