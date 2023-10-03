const mongoose = require('mongoose');
const url = 'mongodb://localhost/db_usuarios'

mongoose.connect ('mongodb://localhost/db_usuarios');

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'));
db.once('open', function callback() {
    console.log("¡Conectado a MongoDB!");
});

module.exports = db;