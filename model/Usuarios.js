const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuariosSchema = new Schema({
    nombre: String,
    edad: Number,
    curso: String,
    CURP: String,
    correo: String,
    telefono: Number,
    fecha: String,
    perfil: String,
    puesto: String

}, { versionKey: false })


module.exports = mongoose.model('usuarios', usuariosSchema)