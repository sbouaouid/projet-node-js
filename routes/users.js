const router = require('express').Router();
const usersRepo = require('../repositories/users')

router.get('/', controllers.getAllUsers)

router.get('/users', controllers.getUsers)

router.post('/users', controllers.createUser)

router.get('/users/:id', controllers.getUserById)

router.put('/users/:id', controllers.updateUser)

router.delete('/users/:id', controllers.deleteUser)


module.exports = router;
