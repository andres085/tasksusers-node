const router = require('express').Router();
const users = require('../controllers/userController');
const tasks = require('../controllers/taskController');

router.get('/users', users.getAll);
router.get('/users/:id', users.getOne);
router.post('/users', users.createOne);
router.put('/users/:id', users.updateOne);
router.delete('/users/:id', users.deleteOne);

router.get('/tasks', tasks.getAll);
router.get('/tasks/:id', tasks.getOne);
router.post('/tasks', tasks.createOne);
router.put('/tasks/:id', tasks.updateOne);
router.delete('/tasks/:id', tasks.deleteOne);

module.exports = router;