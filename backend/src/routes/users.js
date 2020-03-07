const { Router } = require('express');
const router = Router();

const {
    getUsers,
    createUsers,
    deleteUser
} = require('../controllers/users.controllers');

router.get('/', getUsers)

router.post('/', createUsers)

router.delete('/:id', deleteUser)

// router.post()

module.exports = router;