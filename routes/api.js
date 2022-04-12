const router = require('express').Router();
const users = require('../controllers/userController');
const tasks = require('../controllers/taskController');
const asyncHandler = require('../handlers/asyncHandler');
const {postUserRequestValidation, updateUserRequestValidation} = require('../middlewares/user');
const {postTaskRequestValidation, updateTaskRequestValidation} = require('../middlewares/task');

router.get('/users', asyncHandler(async (req, res, next) => {
    const response = await users.getAll();
    res.json({response});
}));

router.get('/users/:id', asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const response = await users.getOne(id);
    res.json({ response });
}));

router.post('/users', postUserRequestValidation, asyncHandler(async (req, res, next) => {
    const body = req.body;
    const response = await users.createOne(body);
    res.status(201).json({ response });
}));

router.put('/users/:id', updateUserRequestValidation, asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    await users.updateOne(id, body);
    res.status(200).json({
        message: 'User updated'
    })
}));

router.delete('/users/:id', asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    await users.deleteOne(id)
    res.status(204).json({});
}));

router.get('/tasks', asyncHandler(async (req, res, next) => {
    const response = await tasks.getAll();
    res.json({ response });
}));

router.get('/tasks/:id', asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const response = await tasks.getOne(id);
    res.json({ response });
}));

router.post('/tasks', postTaskRequestValidation, asyncHandler(async (req, res, next) => {
    const body = req.body;
    const response = await tasks.createOne(body);
    res.json({ response });
}));

router.put('/tasks/:id', updateTaskRequestValidation, asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    await tasks.updateOne(id,);
    res.status(200).json({
        message: 'Task updated'
    });
}));

router.delete('/tasks/:id', asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    await tasks.deleteOne(id);
    res.status(204).json({});
}));

module.exports = router;