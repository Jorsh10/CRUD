const Usuarios = require('../model/Usuarios')

//mostrar

module.exports.mostrar = (req, res) => {
    Usuarios.find({}, (error, usuarios) => {
        if (error) {
            return res.status(500).json({
                message: 'ERROR'
            })
        }
        return res.render('index', { usuarios, usuarios })
    })
}

//Crear
module.exports.crear = (req, res) => {
    //console.log(req.body)
    const usuarios = new Usuarios({
        nombre: req.body.nombre,
        edad: req.body.edad,
        curso: req.body.curso,
        CURP: req.body.CURP,
        correo: req.body.correo,
        telefono: req.body.telefono,
        fecha: req.body.fecha,
        perfil: req.body.perfil,
        puesto: req.body.puesto
    })
    usuarios.save(function(error, usuarios) {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el Usuario'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req, res) => {
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    const curso = req.body.curso_editar
    const CURP = req.body.CURP_editar
    const correo = req.body.correo_editar
    const telefono = req.body.telefono_editar
    const fecha = req.body.fecha_editar
    const perfil = req.body.perfil_editar
    const puesto = req.body.puesto_editar
    const empresa = req.body.empresa_editar

    Usuarios.findByIdAndUpdate(id, { nombre, edad, curso, CURP, correo, telefono, fecha, perfil, puesto, empresa }, (error, usuarios) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando el Usuario'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res) => {
    const id = req.params.id
    Usuarios.findByIdAndRemove(id, (error, usuarios) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando el Usuario'
            })
        }
        res.redirect('/')
    })
}