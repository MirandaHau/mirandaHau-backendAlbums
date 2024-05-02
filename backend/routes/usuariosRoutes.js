const express = require('express');
const router = express.Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    addCommentToUser
} = require('../controllers/usuariosController');

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/:id/comentarios', addCommentToUser);

module.exports = router;