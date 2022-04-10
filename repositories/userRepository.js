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

module.exports.getByEmail = async (email) => {
    return await db.User.findOne({ where: { email: email } });
}

module.exports.postOne = async (body) => {
    return await db.User.create(body);
}

module.exports.updateOne = async (id, body) => {
    const user = await db.User.update({
        userName: body.userName,
        password: body.password,
        email: body.email
    }, {
        where: {
            id: id
        }
    });

    return user;
}

module.exports.deleteOne = async (id) => {
    const user = await db.User.destroy({where: {id:id}});

    return user;
}