const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    leerPorEstado: function (condicion) { 
        return this.leerJSON().filter(objeto => objeto.estado == condicion);
    }

}

module.exports = archivoTareas;