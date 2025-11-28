document.getElementById('identificacion').addEventListener('input', function() {
    //premite solo valores numericos
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('telefono').addEventListener('input', function() {
    //premite solo valores numericos
    this.value = this.value.replace(/[^0-9]/g, '');
});