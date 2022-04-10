const router = require('express').Router();
const users = require('../controllers/userController');
const tasks = require('../controllers/taskController');
const {postUserRequestValidation, updateUserRequestValidation} = require('../middlewares/user');
const {postTaskRequestValidation, updateTaskRequestValidation} = require('../middlewares/task');

router.get('/users', users.getAll);
router.get('/users/:id', users.getOne);
router.post('/users', postUserRequestValidation, users.createOne);
router.post('/login', users.login);
router.put('/users/:id', updateUserRequestValidation, users.updateOne);
router.delete('/users/:id', users.deleteOne);

router.get('/tasks', tasks.getAll);
router.get('/tasks/:id', tasks.getOne);
router.post('/tasks', postTaskRequestValidation, tasks.createOne);
router.put('/tasks/:id', updateTaskRequestValidation, tasks.updateOne);
router.delete('/tasks/:id', tasks.deleteOne);

module.exports = router;