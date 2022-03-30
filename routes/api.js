const router = require('express').Router();
const users = require('../controllers/userController');;

router.get('/users', users.getAll);
router.get('/users/:id', users.getOne);
// router.post('/users', users.post);
// router.put('/users/:id', users.update);
// router.delete('/users/:id', users.delete);

module.exports = router;