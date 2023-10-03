const modalUsuario = new bootstrap.Modal(document.getElementById('modalUsuario'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    edad_editar.value = fila.children[2].innerHTML
    curso_editar.value = fila.children[3].innerHTML
    CURP_editar.value = fila.children[4].innerHTML
    correo_editar.value = fila.children[5].innerHTML
    telefono_editar.value = fila.children[6].innerHTML
    fecha_editar.value = fila.children[7].innerHTML
    perfil_editar.value = fila.children[8].innerHTML
    puesto_editar.value = fila.children[9].innerHTML
   

    modalUsuario.show()
})