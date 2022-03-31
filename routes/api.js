const router = require('express').Router();
const users = require('../controllers/userController');;

router.get('/users', users.getAll);
router.get('/users/:id', users.getOne);
router.post('/users', users.createOne);
router.put('/users/:id', users.updateOne);
router.delete('/users/:id', users.deleteOne);

module.exports = router;