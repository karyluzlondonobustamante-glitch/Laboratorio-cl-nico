
window.addEventListener('DOMContentLoaded', function(){
    // Obtener los parametros de la URL enviados por el Form
    const urlParams = new URLSearchParams(this.windows.location.search);

    // Extraer los parametros de la URL y guardarlos en Constantes
    const nombre = urlParams.get('nombre');
    const cedula = urlParams.get('cedula');
    this.alert("Hayyy datos." + nombre + " " + cedula);
    /* const email = urlParams.get("email");
    const telefono = urlParams.get("telefono");
    const tipoExamen = urlParams.get("tipoExamen");
    const fechaExamen = urlParams.get("fechaExamen"); */

    //Verificar si hay datos
    if (nombre && cedula){
        const elementoNombre = this.document.getElementById('mostrarNombre');
        const elementoCedula = this.document.getElementById('mostrarCedula');
        /* const elementoEmail = this.document.getElementById("mostrarEmail");
        const elementoTelefono = this.document.getElementById("mostrarTelefono");
        const elementoTipoExamen = this.document.getElementById("mostrarTipoExamen");
        const elementoFechaExamen = this.document.getElementById("mostrarFechaExamen");
 */
        elementoNombre.textContent = decodeURIComponent(nombre);
        elementoCedula.textContent = decodeURIComponent(cedula);
         this.alert("Hayyy datos.");
      /*   elementoEmail.textContent = decodeURIComponent(email);
        elementoTelefono.textContent = decodeURIComponent(telefono);
        elementoTipoExamen.textContent = decodeURIComponent(tipoExamen);
        elementoFechaExamen.textContent = decodeURIComponent(fechaExamen); */

    }else{
        this.alert("No se encontraron Datos.");
    }
});


function volveralFormulario(){
    window.location.href="index.html";
}