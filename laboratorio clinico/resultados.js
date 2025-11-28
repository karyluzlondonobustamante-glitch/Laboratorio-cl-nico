window.addEventListener('DOMContentLoaded', function(){
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    // Asignar los valores a las variables
    const nombre = urlParams.get('nombre');
    const identificacion = urlParams.get('identificacion');
    const telefono = urlParams.get('telefono');
    const email = urlParams.get('email');
    const tipoexamen = urlParams.get('tipoexamen');
    const fechaexamen = urlParams.get('fechaexamen');

    //verificar que los elementos existen antes de asignarles valores
    if (nombre && identificacion && telefono && email && tipoexamen && fechaexamen) {
        const elementoNombre = document.getElementById('mostrarnombre');
        const elementoIdentificacion = document.getElementById('mostraridentificacion');
        const elementoTelefono = document.getElementById('mostrartelefono');
        const elementoEmail = document.getElementById('mostraremail');
        const elementoTipoExamen = document.getElementById('mostrartipoexamen');
        const elementoFechaExamen = document.getElementById('mostrarfechaexamen');

        elementoNombre.textContent = decodeURIComponent(nombre);
        elementoIdentificacion.textContent = decodeURIComponent(identificacion);
        elementoTelefono.textContent = decodeURIComponent(telefono);
        elementoEmail.textContent = decodeURIComponent(email);
        elementoTipoExamen.textContent = decodeURIComponent(tipoexamen);
        elementoFechaExamen.textContent = decodeURIComponent(fechaexamen);
    }else{
        this.alert("no se encontraron los datos del formulario, por favor vuelva a llenar el formulario");
    }
});



function volveralfolmulario(){
    window.location.href = "index.html";
}