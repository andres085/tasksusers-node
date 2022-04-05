const db = require('../models');

module.exports.getAll = async () => {
    return await db.User.findAll({
        attributes: ['userName', 'email'],
        include: {
            model: db.Task,
            as: 'tasks',
            attributes: ['title']
        }
    });
}

module.exports.getOne = async (id) => {
    return await db.User.findByPk(id, {
        attributes: ['userName', 'email'],
        include: {
            model: db.Task,
            as: 'tasks',
            attributes: ['title']
        }
    });
}

module.exports.postOne = async (body) => {
    return await db.User.create(body);
}

module.exports.updateOne = async (id, body) => {
    const user = await db.User.findByPk(id);
    
    return await user.update(body);
}

module.exports.deleteOne = async (id) => {
    const user = await db.User.findByPk(id);

    return await user.destroy();
}