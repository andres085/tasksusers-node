const db = require('../models');

module.exports.getAll = async () => {
    return await db.Task.findAll();
}

module.exports.getOne = async (id) => {
    return await db.Task.findByPk(id);
}

module.exports.createOne = async (body) => {
    return await db.Task.create(body);
}

module.exports.updateOne = async (id, body) => {
    const task = await db.Task.update({title: body.title, userId: body.userId },{where: {id: id}});
    return task;
}

module.exports.deleteOne = async (id) => {
    const task = await db.Task.destroy({ where: { id: id } });
    return task;
}

