const express = require('express')
const router = express.Router()

const usuariosController = require('../controllers/usuariosController')

//Mostrar todos los usuarios (GET)
router.get('/', usuariosController.mostrar)
//Crear usuario (POST)
router.post('/crear', usuariosController.crear)
//Editar usuario (POST)
router.post('/editar', usuariosController.editar)
//Borrar usuarioS (GET)
router.get('/borrar/:id', usuariosController.borrar)
module.exports = router